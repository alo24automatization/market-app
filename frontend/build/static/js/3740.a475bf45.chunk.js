"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3740,1181],{22662:(e,l,r)=>{r.d(l,{A:()=>i});const t=(0,r(55749).Ay)("http://185.241.61.68/"),a=JSON.parse(localStorage.getItem("userData"));t.auth={token:null===a||void 0===a?void 0:a.token,market:null===a||void 0===a?void 0:a.market};const i=t},24102:(e,l,r)=>{r.r(l),r.d(l,{default:()=>C});var t=r(65043),a=r(72096),i=r(90221),o=r(70579);const d=function(e){let{dataObject:l,centerIcon:r,onClick:t,closeActive:d,added:c,fulled:s,fulled2:n,returnedFunction:u,currency:m}=e;const b={closeProduct:{icon:(0,o.jsx)(i.$8F,{size:"0.875rem",className:"duration-500 text-white-900 w-[0.875rem]"}),bgIconColor:"duration-500 bg-[#F04438] border-[#F04438]",bgCardColor:"duration-500 bg-white-900 border-[#A9C0EF]"},allProducts:{icon:(0,o.jsx)(i.Lqc,{size:"0.875rem",className:"duration-500 text-white-900"}),bgIconColor:"duration-500 bg-[#86A7E9] border-[#86A7E9]",bgCardColor:"duration-500 bg-[#EFF4F2] border-[#A9C0EF]"},addProduct:{icon:(0,o.jsx)(i.YHj,{size:"0.875rem",className:"duration-500 text-white-900 w-[0.875rem]"}),bgIconColor:"duration-500 bg-[#F79009] border-[#F79009]",bgCardColor:"duration-500 bg-[#FEF0C7] border-[#F79009]"},checkProduct:{icon:(0,o.jsx)(i.KDk,{size:"0.875rem",className:"duration-500 text-white-900 w-[0.875rem]"}),bgIconColor:"duration-500 bg-[#12B76A] border-[#12B76A]",bgCardColor:"duration-500 bg-[#D1FADF] border-[#12B76A]"},blackCheckProduct:{icon:(0,o.jsx)(i.KDk,{size:"0.875rem",className:"duration-500 text-white-900 w-[0.875rem]"}),bgIconColor:"duration-500 bg-[#F04438] border-[#F04438]",bgCardColor:"duration-500 bg-[#EFF4F2] border-[#F04438]"}};return(0,o.jsxs)("div",{className:"duration-500 product-exchanges-card ".concat(d?b.closeProduct.bgCardColor:s?b.checkProduct.bgCardColor:c?b.addProduct.bgCardColor:n?b.blackCheckProduct.bgCardColor:b.allProducts.bgCardColor),children:[(0,o.jsx)("div",{className:"duration-500 product-exchanges-card-top-icons ".concat(d?b.closeProduct.bgIconColor:s?b.checkProduct.bgIconColor:c?b.addProduct.bgIconColor:n?b.blackCheckProduct.bgIconColor:b.allProducts.bgIconColor),onClick:(null===l||void 0===l?void 0:l.number)>0?()=>t(l):()=>{},children:d?b.closeProduct.icon:s?b.checkProduct.icon:c?b.addProduct.icon:n?b.blackCheckProduct.icon:b.allProducts.icon}),r&&(0,o.jsx)("div",{className:"duration-500 product-exchanges-card-center-icons",onClick:()=>u(l),children:(0,o.jsx)(i.NEn,{size:"0.875rem",className:"text-white-900 w-[0.875rem]"})}),(0,o.jsx)("h3",{className:"product-exchanges-card-text",children:null===l||void 0===l?void 0:l.name}),(0,o.jsxs)("div",{className:"duration-500 product-exchanges-card-body",children:[(0,o.jsxs)("div",{className:"flex flex-col w-full",children:[(0,o.jsxs)("div",{className:"mb-[0.625rem] product-exchanges-card-body-text",children:[(0,a.t)("Kodi")," :",(0,o.jsx)("span",{className:"product-exchanges-span bg-[#F79009]",children:null===l||void 0===l?void 0:l.code})]}),(0,o.jsxs)("div",{className:"product-exchanges-card-body-text",children:[(0,a.t)("Olish")," :",(0,o.jsx)("span",{className:"product-exchanges-span bg-[#86A7E9]",children:"UZS"===m?null===l||void 0===l?void 0:l.get.toLocaleString("ru-Ru"):null===l||void 0===l?void 0:l.getUSD.toLocaleString("ru-Ru")})]})]}),(0,o.jsxs)("div",{className:"flex flex-col w-full",children:[(0,o.jsxs)("div",{className:"mb-[0.625rem] product-exchanges-card-body-text",children:[(0,a.t)("Soni")," :",(0,o.jsx)("span",{className:"product-exchanges-span bg-[#00B4CC]",children:null===l||void 0===l?void 0:l.number.toLocaleString("ru-Ru")})]}),(0,o.jsxs)("div",{className:"product-exchanges-card-body-text",children:[(0,a.t)("Sotish")," :",(0,o.jsx)("span",{className:"product-exchanges-span bg-[#32D583]",children:"UZS"===m?null===l||void 0===l?void 0:l.sell.toLocaleString("ru-Ru"):null===l||void 0===l?void 0:l.sellUSD.toLocaleString("ru-Ru")})]})]})]})]})};var c=r(80827);const s=function(e){let{placeholder:l,value:r,onChange:t,someClasses:a,onKeyUp:i,disabled:d,labelText:s}=e;return(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("span",{className:"text-[#193F8A] text-[1rem] font-[400] leading-[1.875rem] mb-[0.675rem]",children:s}),(0,o.jsx)(c.A,{placeholder:l,value:r,onChange:t,someClasses:a,onKeyUp:i,disabled:d})]})};var n=r(71605);const u=function(e){let{market:l,onClick:r,activeFilial:t}=e;return(0,o.jsxs)(n.P.div,{initial:{y:"100%"},animate:{y:"0%"},transition:{duration:.5},className:"flex items-center gap-[1.25rem] p-[1.25rem] border-[2px] border-blue-100 bg-white-900 rounded-[0.5rem] ".concat(t===l.id?"bg-[#86A7E9]":""," hover:bg-[#86A7E9] duration-200 cursor-pointer group"),onClick:()=>r(l),children:[(0,o.jsx)("div",{className:"w-[2.625rem] h-[2.625rem] bg-white-900 rounded-full border-[2px] border-blue-600 flex items-center justify-center p-[2px] shadow-[0_10px_10px_rgba(0,0,0,0.05)]",children:null!==l&&void 0!==l&&l.image?(0,o.jsx)("img",{src:null===l||void 0===l?void 0:l.image,alt:null===l||void 0===l?void 0:l.filialName,className:"rounded-full"}):null===l||void 0===l?void 0:l.filialName[0].toUpperCase()}),(0,o.jsxs)("div",{className:"flex flex-col gap-[0.3125rem] grow",children:[(0,o.jsx)("h3",{className:"font-medium text-sm leading-[1rem] text-blue-700 group-hover:text-white-900 durattion-200 ".concat(t===l.filialName?"text-white-900":""),children:null===l||void 0===l?void 0:l.filialName}),(0,o.jsxs)("p",{className:"font-light text-xs leading-[0.875rem] text-black-700 group-hover:text-white-900 durattion-200 ".concat(t===l.filialName?"text-white-900":""),children:[null===l||void 0===l?void 0:l.directorName," ",null===l||void 0===l?void 0:l.directorLastName]})]})]})};var m=r(12602),b=r(78054),g=r(53536),x=r(73734),p=r(41576),h=r(79456),v=r(37919),f=r(4235),N=r(22662),j=r(80502);const C=function(){const e=(0,h.wA)(),{filialDatas:l,loading:r}=(0,h.d4)((e=>e.exchanges)),{products:c}=(0,h.d4)((e=>e.incoming)),{currencyType:C}=(0,h.d4)((e=>e.currency)),{market:w}=(0,h.d4)((e=>e.login)),[S,k]=(0,t.useState)(""),[F,y]=(0,t.useState)(""),[A,P]=(0,t.useState)(""),[D,I]=(0,t.useState)([]),[E,U]=(0,t.useState)([]),[z,L]=(0,t.useState)(""),[_,K]=(0,t.useState)(""),[T,q]=(0,t.useState)(!1),[M,O]=(0,t.useState)(""),[$,B]=(0,t.useState)([]),[R,Y]=(0,t.useState)([]),[H,J]=(0,t.useState)(""),[Z,G]=(0,t.useState)([...$]),[X,Q]=(0,t.useState)([...E]),[V,W]=(0,t.useState)(""),ee=e=>{L(e),K(e.id)},le=()=>q(!T),re=e=>{J("modal2"),O(e),le()},te=()=>{q(!1)},ae=e=>{I((l=>l&&(0,g.map)(l,(l=>l.id===e.id?{...l,number:l.number+Number(e.number)}:l))));const l=(0,g.filter)($,(l=>l!==e));B(l);const r=(0,g.filter)(R,(l=>l!==e.id));Y(r)},ie=(e,l)=>{if("name"===e){if(y(l),isNaN(l))return""!==A.trim()?G((0,g.filter)($,(e=>e.name.toLowerCase().includes(l.toLowerCase().trim())&&e.code.includes(A.trim())))):G((0,g.filter)($,(e=>e.name.toLowerCase().includes(l.toLowerCase()))));G($)}else{let e=l.trim();if(P(l),e)return isNaN(F)?G((0,g.filter)($,(e=>e.code.includes(l)&&e.name.toLowerCase().includes(F.toLowerCase().trim())))):G((0,g.filter)($,(e=>e.code.includes(l))));G($)}};return(0,t.useEffect)((()=>{w&&N.A.emit("getAllFilials",{market:w._id}),w&&N.A.on("getAllFilials",(l=>{let{id:r,filials:t}=l;r===w._id&&e((0,p.Bo)(t))})),w&&N.A.on("error",(e=>{let{id:l,err:r}=e;l===w._id&&(0,x.lY)(r.message,"error")}))}),[w,e]),(0,t.useEffect)((()=>{e((0,v.d$)())}),[e]),(0,t.useEffect)((()=>{const e=c&&(0,g.map)(c,(e=>{var l,r,t;return{value:e._id,label:e.productdata.code+" - "+e.productdata.name,id:e._id,categoryId:e.category._id,categoryCode:e.category.code,get:e.price.incomingpriceuzs,getUSD:e.price.incomingprice,sell:e.price.sellingpriceuzs,sellUSD:e.price.sellingprice,unidId:e.unit._id,unitName:e.unit.name,code:e.productdata.code,number:e.total,name:e.productdata.name,productDataId:e.productdata._id,barcode:null===(l=e.productdata)||void 0===l?void 0:l.barcode,tradeprice:(null===(r=e.price)||void 0===r?void 0:r.tradeprice)||0,tradepriceuzs:(null===(t=e.price)||void 0===t?void 0:t.tradepriceuzs)||0,minimumcount:e.minimumcount||0}}));I(e)}),[c]),(0,t.useEffect)((()=>{G($)}),[$]),(0,t.useEffect)((()=>{const e=(0,g.map)(l,(e=>{var l,r;return{id:null===e||void 0===e?void 0:e._id,image:null===e||void 0===e?void 0:e.image,filialName:null===e||void 0===e?void 0:e.name,directorName:null===e||void 0===e||null===(l=e.director)||void 0===l?void 0:l.firstname,directorLastName:null===e||void 0===e||null===(r=e.director)||void 0===r?void 0:r.lastname}}));U(e),Q(e)}),[l]),(0,t.useEffect)((()=>{const e=(0,g.filter)($,(e=>0!==(null===e||void 0===e?void 0:e.number)));B(e)}),[D,$]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.A,{toggleModal:le,body:"exchanges",approveFunction:"modal1"===H?(e,l)=>{e.number>0&&""!==e.get&&""!==e.sell&&I((r=>r&&(0,g.map)(r,(r=>r.id===e.id&&l?{...r,number:r.number-Number(e.number)}:r))));-1===$.findIndex((l=>l.id===e.id))&&e.get<e.sell&&e.number>0&&""!==e.get&&""!==e.sell&&l?(R.push(e.id),$.push(e),te()):e.get>=e.sell?(0,x.$H)():""===(null===e||void 0===e?void 0:e.number)||""===(null===e||void 0===e?void 0:e.get)||""===(null===e||void 0===e?void 0:e.sell)?(0,x.Tf)():l?e.number<0?(0,x.$G)():(B((l=>(0,g.map)(l,(l=>(null===l||void 0===l?void 0:l.id)===e.id?{...l,get:e.get,sell:e.sell,number:l.number+Number(e.number),getUSD:e.getUSD,sellUSD:e.sellUSD}:l)))),te()):(0,x.$1)()}:"modal2"===H?(e,l)=>{e.number>0&&""!==e.get&&""!==e.sell&&I((r=>r&&(0,g.map)(r,(r=>r.id===e.id&&l?{...r,number:r.number+Number(e.number)}:r)))),B((r=>r&&(0,g.map)(r,(r=>{if(r.number===Number(e.number)){const l=(0,g.filter)(R,(l=>l!==e.id));Y(l)}return r.id===e.id&&l?{...r,get:e.get,getUSD:e.getUSD,sell:e.sell,sellUSD:e.sellUSD,number:r.number-Number(e.number)}:r})))),te()}:"",closeModal:te,isOpen:T,dataObject:M}),r&&(0,o.jsx)("div",{className:"fixed backdrop-blur-[2px] z-[100] left-0 top-0 right-0 bottom-0 bg-white-700 flex flex-col items-center justify-center w-full h-full",children:(0,o.jsx)(f.A,{})}),(0,o.jsxs)("section",{className:"flex h-full",children:[(0,o.jsxs)("div",{className:"basis-2/3 border-r-[1px] border-r-[#A9C0EF] flex flex-col",children:[(0,o.jsx)("div",{className:"mainPadding",children:(0,o.jsx)(s,{labelText:(0,a.t)("Filiallar"),placeholder:(0,a.t)("qidirish..."),value:S,onChange:e=>(e=>{if(k(e),isNaN(e))return Q((0,g.filter)(E,(l=>l.filialName.toLowerCase().includes(e.toLowerCase()))));Q(E)})(e.target.value)})}),(0,o.jsx)("div",{className:"grow relative",children:(0,o.jsx)("div",{className:"absolute left-0 right-0 top-0 bottom-[1rem] overflow-auto pl-[2.5rem] pr-[1.25rem] pt-[1.25rem]",children:0===X.length?(0,o.jsx)(b.A,{text:"".concat((0,a.t)("Filiallar mavjud emas!"))}):(0,g.map)(X,((e,l)=>(0,o.jsx)(n.P.div,{initial:{y:"100%"},animate:{y:"0%"},transition:{delay:0,ease:"linear"},className:"pb-[0.675rem] ",children:(0,o.jsx)(u,{market:e,onClick:ee,activeFilial:_})},l)))})})]}),(0,o.jsxs)("div",{className:"basis-1/3 bg-white-700 flex flex-col",children:[(0,o.jsxs)("div",{className:"p-[1.25rem]",children:[(0,o.jsx)("div",{className:"mb-[1.25rem] pt-[0.5rem]",children:(0,o.jsx)(j.A,{label:(0,a.t)("Mahsulotlar"),placeholder:(0,a.t)("Mahsulotlar"),options:D,onSelect:e=>{let l={...e};W({label:e.label,value:e.label}),J("modal1"),delete l.label,delete l.value,O(l),le()},value:V})}),(0,o.jsxs)("div",{className:"flex justify-between gap-[1.25rem]",children:[(0,o.jsx)("div",{className:"w-full",children:(0,o.jsx)(s,{labelText:(0,a.t)("Kodi"),placeholder:(0,a.t)("qidirish..."),value:A,onChange:e=>ie("code",e.target.value)})}),(0,o.jsx)("div",{className:"w-full",children:(0,o.jsx)(s,{labelText:(0,a.t)("Nomi"),placeholder:(0,a.t)("qidirish..."),value:F,onChange:e=>ie("name",e.target.value)})})]})]}),(0,o.jsx)("div",{className:"grow relative",children:(0,o.jsx)("div",{className:"absolute left-0 right-0 top-0 bottom-[1rem] pl-[2rem] pr-[2rem] pb-[0.25rem] pt-[1.25rem] overflow-auto",children:0===Z.length?(0,o.jsx)(b.A,{text:"".concat((0,a.t)("Maxsulot o'tkazilmagan"))}):(0,g.map)(Z,((e,l)=>(0,o.jsx)(n.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"pb-[0.675rem] ",children:(0,o.jsx)(d,{dataObject:e,type:"closeProduct",centerIcon:!0,closeActive:!0,onClick:ae,returnedFunction:re,currency:C,open:!0})},l)))})}),(0,o.jsx)("div",{className:"p-[1.25rem] border-t-[0.3125rem] border-[#EFF4F2]",children:(0,o.jsx)("div",{className:"flex gap-[0.625rem]",children:(0,o.jsxs)("button",{type:"button",className:"register-selling-right-accept-btn",onClick:()=>{const l=$&&(0,g.map)($,(e=>({_id:e.id,total:e.number,minimumcount:e.minimumcount,productdata:{_id:e.productDataId,name:e.name,code:e.code,barcode:e.barcode},unit:{_id:e.unidId,name:e.unitName},category:{_id:e.categoryId,code:e.categoryCode},price:{incomingprice:e.getUSD,incomingpriceuzs:e.get,sellingprice:e.sellUSD,sellingpriceuzs:e.sell,tradeprice:e.tradeprice,tradepriceuzs:e.tradepriceuzs}}))),r={filial:z.id,products:l};z&&l.length>0?e((0,p.Kn)(r)).then((e=>{"fulfilled"===e.meta.requestStatus&&((0,x.lY)("Maxsulot muvaffaqiyatli o'tkazildi!","success"),B([]),Y([]),L(""),K(""),W(""))})):(0,x.$T)()},children:[(0,o.jsx)(i.dkX,{size:"1.5rem",className:"text-white-900 mr-[0.675rem]"}),(0,a.t)("Jo'natish")]})})})]})]})]})}}}]);
//# sourceMappingURL=3740.a475bf45.chunk.js.map