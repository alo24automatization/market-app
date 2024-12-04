const { Market } = require('../../models/MarketAndBranch/Market');
const { DailySaleConnector } = require('../../models/Sales/DailySaleConnector');
const { SaleConnector } = require('../../models/Sales/SaleConnector');
const { User } = require('../../models/Users');
require('../../models/Sales/SaleProduct');
require('../../models/Sales/Discount');
require('../../models/Sales/Payment');
require('../../models/Sales/Packman');
require('../../models/Sales/Client');
// require('../../models/Users');
require('../../models/Sales/DailySaleConnector');
require('../../models/Products/Product');
require('../../models/Products/Productdata');

module.exports.getSellersReport = async (req, res) => {
  try {
    const {
      market,
      countPage,
      currentPage,
      startDate,
      endDate,
      search,
      seller,
    } = req.body;
    const marke = await Market.findById(market);
    if (!marke) {
      return res.status(400).json({
        message: `Diqqat! Do'kon haqida malumotlar topilmadi!`,
      });
    }

    const id = new RegExp('.*' + search ? search.id : '' + '.*', 'i');

    const name = new RegExp('.*' + search ? search.client : '' + '.*', 'i');

    const saleconnectors = await DailySaleConnector.find({
      market,
      user: seller,
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    })
      .select("-isArchive -market -__v")
      .populate({
        path: "products",
        select:
          "totalprice unitprice totalpriceuzs unitpriceuzs pieces fromFilial createdAt",
        populate: {
          path: "product",
          select: "productdata total",
          populate: {
            path: "productdata",
            select: "code name",
            options: { sort: { code: 1 } },
          },
        },
      })
      .populate("payment", "payment paymentuzs totalprice totalpriceuzs")
      .populate("discount", "discount discountuzs")
      .populate("debt", "debt debtuzs")
      .populate({
        path: "client",
        select: "name",
      })
      .populate("packman", "name")
      .populate("user", "firstname lastname")
      .populate({
        path: "saleconnector",
        select: "id",
        match: { id: id }
      })

    const filter = saleconnectors.filter((item) => {
      return item.saleconnector !== null
    });
    const count = filter.length;
    res.status(200).json({
      saleconnectors: filter.splice(countPage * currentPage, countPage),
      count,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Serverda xatolik yuz berdi...' });
  }
};

module.exports.getDayTotalReport = async (req, res) => {
  try {
    const { market, startDate, endDate, sellerId } = req.body;
    const marke = await Market.findById(market);
    if (!marke) {
      return res.status(400).json({
        message:
          "Diqqat! Foydalanuvchi ro'yxatga olinayotgan do'kon dasturda ro'yxatga olinmagan.",
      });
    }
    console.log(sellerId);
    const seller = await User.findById(sellerId)
      .select("firstname lastname market type login phone isIncomePage")
      .lean();

    if (seller) {
      const sales = await DailySaleConnector.find({
        user: seller._id,
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
      })
        .select("user payment")
        .populate(
          "payment",
          "cash cashuzs card carduzs transfer transferuzs payment paymentuzs totalprice totalpriceuzs"
        )
        .populate("saleconnector", "id totalOfBackAndDebt")
        .populate("client", "name")
        .populate({
          path: "products",
          select: "totalprice totalpriceuzs pieces price product",
          populate: {
            path: "price",
            select:
              "incomingprice incomingpriceuzs sellingprice sellingpriceuzs",
          },
        })
        .populate({
          path: "products",
          select: "totalprice totalpriceuzs pieces price product",
          populate: {
            path: "product",
            select: "price",
            populate: {
              path: "price",
              select: "incomingprice incomingpriceuzs",
            },
          },
        })
        .populate(
          "discount",
          "discount discountuzs totalprice totalpriceuzs procient"
        );

      seller.sales = sales.length;
      seller.totalsales = sales.reduce((prev, sale) => {
        return prev + ((sale.payment && sale.payment.totalprice) || 0);
      }, 0);
      seller.totalsalesuzs = sales.reduce((prev, sale) => {
        return prev + ((sale.payment && sale.payment.totalpriceuzs) || 0);
      }, 0);

      seller.cash = sales.reduce((prev, sale) => {
        return prev + ((sale.payment && sale.payment.cash) || 0);
      }, 0);
      seller.cashuzs = sales.reduce((prev, sale) => {
        return prev + ((sale.payment && sale.payment.cashuzs) || 0);
      }, 0);

      seller.card = sales.reduce((prev, sale) => {
        return prev + ((sale.payment && sale.payment.card) || 0);
      }, 0);
      seller.carduzs = sales.reduce((prev, sale) => {
        return prev + ((sale.payment && sale.payment.carduzs) || 0);
      }, 0);

      seller.transfer = sales.reduce((prev, sale) => {
        return prev + ((sale.payment && sale.payment.transfer) || 0);
      }, 0);
      seller.transferuzs = sales.reduce((prev, sale) => {
        return prev + ((sale.payment && sale.payment.transferuzs) || 0);
      }, 0);


      let profit = 0;
      let profituzs = 0;
      let debt = 0
      let debtuzs = 0

      const profitData = sales.map((sale) => {
        const totalincomingprice = sale.products.reduce(
          (prev, item) =>
            prev +
            item.pieces *
            ((item.price && item.price.incomingprice) ||
              (item.product && item.product.price.incomingprice) ||
              0),
          0
        );
        const totalincomingpriceuzs = sale.products.reduce(
          (prev, item) =>
            prev +
            item.pieces *
            ((item.price && item.price.incomingpriceuzs) ||
              (item.product && item.product.price.incomingpriceuzs) ||
              0),
          0
        );
        const totalprice = sale.products.reduce(
          (summ, product) => summ + (product.totalprice || 0),
          0
        );
        const totalpriceuzs = sale.products.reduce(
          (summ, product) => summ + (product.totalpriceuzs || 0),
          0
        );

        const discount = (sale.discount && sale.discount.discount) || 0;
        const discountuzs = (sale.discount && sale.discount.discountuzs) || 0;

        debt += (Math.round((totalprice - sale.payment.payment - discount) * 1000) / 1000)
        debtuzs += (Math.round((totalpriceuzs - sale.payment.paymentuzs - discountuzs) * 1) / 1)

        profit += totalprice - totalincomingprice - discount;
        profituzs += totalpriceuzs - totalincomingpriceuzs - discountuzs;
      });
      seller.profit = profit;
      seller.profituzs = profituzs;
      seller.debt = debt;
      seller.debtuzs = debtuzs;

    }
    res.status(201).send(seller);
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({
        error: "Serverda xatolik yuz berdi...",
        description: error.message,
      });
  }
};
