import React from "react"
import { useProductSelector } from "../store"
import { selectCurrentProduct } from "../store/slices/productSlice"

const DetailsLoan = () => {
    const product = useProductSelector(selectCurrentProduct)
    const month = useProductSelector((state) => state.products.month)
    const amount = useProductSelector((state) => state.products.amount)

    const totalAmountFloat = parseFloat(amount?.replace(/,/g, "") || "0")
    const totalAmount =
        totalAmountFloat + totalAmountFloat * (parseFloat(product?.interest ?? "0") / 100)

    const monthlyInstallment = totalAmount / month || 0

    const targetMonth = new Date()
    targetMonth.setMonth(targetMonth.getMonth() + month)
    console.log("monthlyInstallment", monthlyInstallment)

    return (
        <>
            <div className="w-full rounded-lg border border-slate-200  flex flex-col justify-center items-center ">
                <div className="w-full h-[81px] justify-center items-center  inline-flex px-10">
                    <div className="w-full flex justify-start items-start ">
                        <h3 className="self-stretch text-gray-800 text-lg md:text-xl font-normal font-['Work Sans'] leading-normal">
                            Monthly amount
                        </h3>
                    </div>
                    <div className=" flex justify-end items-end ">
                        <div className="self-stretch text-right text-blue-600 md:text-[32px] text-[24px] font-medium font-['Rubik'] leading-[38.40px]">
                            ${monthlyInstallment.toLocaleString("en-US")}
                        </div>
                    </div>
                </div>
                <div className="w-full h-20  flex flex-col justify-center items-start py-4 px-6 border-t border-slate-500 rounded-b-lg bg-blue-50 ">
                    <div className="w-full flex justify-start items-center ">
                        <p
                            className="text-gray-800 text-xs font-normal font-['Work Sans'] leading-2 text-center md:text-left
                        ">
                            You’re planning {month} monthly deposits to reach your <b>${amount}</b>{" "}
                            goal by{" "}
                            <b>
                                {targetMonth.toLocaleString("en-US", {
                                    month: "long",
                                    year: "numeric",
                                })}
                                .
                            </b>
                            The total amount loaned will be{" "}
                            <b>${totalAmount.toLocaleString("en-US")}</b>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsLoan
