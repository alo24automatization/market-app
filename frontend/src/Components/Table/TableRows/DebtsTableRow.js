import {map, uniqueId} from 'lodash'
import React, {useEffect, useState} from 'react'
import TableBtn from '../../Buttons/TableBtn'
import {t} from 'i18next'
import {useNavigate} from 'react-router-dom'
import moment from 'moment'
import {useSelector} from "react-redux";

export const DebtsTableRow = ({
                                  data,
                                  currency,
                                  Pay,
                                  Print,
                                  Edit,
                                  salerDebts,
                                  totalDebt,
                                  hiddenInfoButton,
                                  hiddenPayButton
                              }) => {
    const [isEditComment, setIsEditComment] = useState(null)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    const {user} = useSelector((state) => state.login)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const navigate = useNavigate()
    const linkToSale = (clientID) =>
        navigate(`/hamkorlar/mijoz`, {
            replace: true,
            state: clientID,
        })

    const showRedLinePayDateComing = (pay_end_date) => {
        const now = moment();
        const debtEndDate = moment(pay_end_date);
        const daysUntilPayment = debtEndDate.diff(now, 'days');
        return daysUntilPayment <= 3;
    }
    const [debts, setDebts] = useState([]);
    const handleSelectDebt = (checked, debt) => {
        if (debts.some((item) => item._id === debt._id)) {
            setDebts((prev) => prev.filter(item => item._id !== debt._id))
        } else {
            setDebts([...debts, debt])
        }
    }
    useEffect(() => {
        sessionStorage.setItem("selected_debts", JSON.stringify(debts))
    }, [debts.length])

    return (
        <>
            {map(data, (debt, index) =>
                !isMobile ? (
                    <tr className={`${showRedLinePayDateComing(debt.pay_end_date) ? "bg-error-300" : ""} tr`}
                        key={uniqueId('debt')}>
                        <td className='text-left td '>{1 + index}</td>
                        <td className='text-left td'>
                            {new Date(debt.createdAt).toLocaleDateString()}
                        </td>
                        <td className='text-left td'>{debt.id}</td>
                        {salerDebts ? null :
                            <td className='text-left td'>
                                {debt.packman && debt.packman}
                            </td>
                        }

                        <td className='text-left td'>
                            {debt.client && debt.client.name}
                        </td>
                        <td className='text-left td'>
                            {debt.client && debt.client.phoneNumber}
                        </td>
                        <td
                            onMouseOver={() => setIsEditComment(debt._id)}
                            onMouseOut={() => setIsEditComment(null)}
                            className={`text-left td relative hover:bg-black-200 transition duration-300 ease-in-out`}
                        >
                            {debt.comment}
                            {isEditComment === debt._id && (
                                <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                    <TableBtn
                                        type={'edit'}
                                        bgcolor={'bg-warning-500'}
                                        onClick={() =>
                                            Edit(debt.comment, debt.debtid)
                                        }
                                    />
                                </span>
                            )}
                        </td>
                        <td
                            className={`text-left td relative hover:bg-black-200 transition duration-300 ease-in-out`}
                        >
                            {new Date(debt.pay_end_date).toLocaleDateString()}
                        </td>
                        <td className='text-left td font-medium'>
                            {(currency === 'USD'
                                    ? debt.totalprice
                                    : debt.totalpriceuzs
                            ).toLocaleString('ru-RU')}{' '}
                            <span className='text-warning-500'>{currency}</span>
                        </td>
                        <td className='text-left td py-[0.625rem] font-medium'>
                            {currency === 'UZS'
                                ? (
                                    Math.round(debt.debtuzs * 1) / 1
                                ).toLocaleString('ru-RU')
                                : (
                                    Math.round(debt.debt * 1000) / 1000
                                ).toLocaleString('ru-RU')}{' '}
                            <span className='text-error-500'>{currency}</span>
                        </td>
                        <td className='td border-r-0 py-[6px]'>
                            <div className='flex justify-center items-center gap-[0.625rem]'>
                                <TableBtn
                                    type={'print'}
                                    bgcolor={'bg-blue-600'}
                                    onClick={() => {
                                        Print({...debt.saleconnector, totaldebtuzs: debt.totaldebtuzs})
                                    }}
                                />
                                {
                                    hiddenInfoButton ? null :
                                        <TableBtn
                                            type={'info'}
                                            bgcolor={'bg-blue-600'}
                                            onClick={() => linkToSale(debt.client._id)}
                                        />
                                }
                                {
                                    hiddenPayButton ? null :
                                        <TableBtn
                                            type={'pay'}
                                            bgcolor={'bg-success-500'}
                                            onClick={() => Pay(debt)}
                                        />
                                }
                                {hiddenPayButton && hiddenInfoButton ?
                                    <input type={"checkbox"}
                                           checked={debts.some(item => item._id === debt._id)}
                                           onChange={(e) => handleSelectDebt(e.currentTarget.checked, debt)}/>
                                    : null
                                }
                            </div>
                        </td>
                    </tr>
                ) : (
                    <li
                        key={uniqueId('debt')}
                        className='text-sm w-[90vw]  bg-[white] rounded-lg mb-2 list-none'
                    >
                        <li className='flex justify-between p-[10px] border border-b-1 border-s-0 border-t-0 border-e-0'>
                            <p>
                                {1 + index}-{' '}
                                {new Date(debt.createdAt).toLocaleDateString()}
                            </p>
                            <p className='text-[blue]'>
                                {t('ID')}: {debt.id}
                            </p>
                        </li>
                        <li className='flex justify-between p-[10px] border border-b-1 border-s-0 border-t-0 border-e-0'>
                            <p>
                                <span>{t('Mijoz')}: </span>{' '}
                                {debt.client && debt.client.name}
                            </p>
                        </li>
                        <li className='text-sm w-[90vw]  bg-[white] rounded-lg mb-2 list-none'>
                            <li className='flex justify-between p-[10px] border border-b-1 border-s-0 border-t-0 border-e-0'>
                                <p
                                    onMouseOver={() =>
                                        setIsEditComment(debt._id)
                                    }
                                    onMouseOut={() => setIsEditComment(null)}
                                    className={`text-left  relative hover:bg-black-200  transition duration-300 ease-in-out`}
                                >
                                    {t('Qarz izoh')}:{debt.comment}
                                    {isEditComment === debt._id && (
                                        <span
                                            className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                            <TableBtn
                                                type={'edit'}
                                                bgcolor={
                                                    'bg-warning-500 w-[50px]'
                                                }
                                                onClick={() =>
                                                    Edit(
                                                        debt.comment,
                                                        debt.debtid
                                                    )
                                                }
                                            />
                                        </span>
                                    )}
                                </p>
                            </li>
                        </li>

                        <li className='flex justify-between p-[10px] border border-b-1 border-s-0 border-t-0 border-e-0'>
                            <p>
                                <span>{t('Jami')}: </span>
                                {(currency === 'USD'
                                        ? debt.totalprice
                                        : debt.totalpriceuzs
                                ).toLocaleString('ru-RU')}{' '}
                                <span className='text-warning-500'>
                                    {currency}
                                </span>
                            </p>
                            <p className='text-[blue]'>
                                {t('Qarz')}:{' '}
                                {currency === 'UZS'
                                    ? (
                                        Math.round(debt.debtuzs * 1) / 1
                                    ).toLocaleString('ru-RU')
                                    : (
                                        Math.round(debt.debt * 1000) / 1000
                                    ).toLocaleString('ru-RU')}{' '}
                                <span className='text-error-500'>
                                    {currency}
                                </span>
                            </p>
                        </li>
                        <li className='flex justify-end p-[10px] '>
                            <div className='flex w-[100%] justify-end items-center gap-[0.625rem]'>
                                <TableBtn
                                    type={'print'}
                                    bgcolor={'bg-blue-600'}
                                    onClick={() => Print(debt.saleconnector)}
                                />
                                {hiddenInfoButton
                                    ? null :
                                    <TableBtn
                                        type={'info'}
                                        bgcolor={'bg-blue-600'}
                                        onClick={() => linkToSale(debt)}
                                    />
                                }
                                {hiddenPayButton ? null :
                                    <TableBtn
                                        type={'pay'}
                                        bgcolor={'bg-success-500'}
                                        onClick={() => Pay(debt)}
                                    />
                                }
                            </div>
                        </li>
                    </li>
                )
            )}
            <tr className='tr bg-transparent'>
                <td
                    className='text-left td border-none bg-none'
                    colSpan={hiddenPayButton && hiddenInfoButton?1:user.type === "Director" ? 9 : 8}
                ></td>
                <td
                    className='text-left td py-[0.625rem] font-medium border-none bg-none'
                    colSpan={hiddenPayButton && hiddenInfoButton?3:2}
                >
                    {hiddenPayButton && hiddenInfoButton?<span>{t('Umumiy qarz')}:{" "}</span>:null}
                    {currency === 'UZS'
                        ? (
                            Math.round(
                                data.reduce(
                                    (prev, debt) => prev + debt.debtuzs,
                                    0
                                ) * 1
                            ) / 1
                        ).toLocaleString('ru-RU')
                        : (
                            Math.round(
                                data.reduce(
                                    (prev, debt) => prev + debt.debt,
                                    0
                                ) * 1000
                            ) / 1000
                        ).toLocaleString('ru-RU')}{' '}
                    <span className='text-error-500'>{currency}</span>
                </td>
            </tr>
        </>
    )
}
