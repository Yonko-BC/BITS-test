import React, { useState } from "react"
import { useProductDispatch, useProductSelector } from "../store"
import { setAmount } from "../store/slices/productSlice"

const AmountInput = () => {
    const amount = useProductSelector((state) => state.products.amount)
    const dispatch = useProductDispatch()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = e.target

        const isDot = value.endsWith(".")
        value = value.replace(/[^\d.,]/g, "")

        value = value.replace(/,(?=\d{3}(?!\.))/g, "")
        value = value.replace(/\.(?![\d,])/, "")

        const parsedValue = parseFloat(value.replace(/,/g, ""))
        const formattedValue = isNaN(parsedValue) ? value : parsedValue.toLocaleString("en-US")

        dispatch(setAmount(formattedValue + (isDot ? "." : "")))
    }

    return (
        <>
            <label className="text-gray-800 text-sm font-normal font-['Work Sans'] leading-[21px]">
                Loan amount
            </label>
            <div className="  w-full h-[56px] relative rounded-lg border border-slate-200 p-1">
                <img
                    src="/assets/dollar-sign.png"
                    alt="dollar"
                    className="absolute left-[10px] top-[26%] z-50"
                />
                <input
                    className=" pl-[40px] outline-none absolute left-1 right-1 top-1 bottom-1 border-none px-4
                     self-stretch text-gray-700 text-2xl font-medium font-['Rubik'] leading-[28.80px]"
                    value={amount}
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}

export default AmountInput
