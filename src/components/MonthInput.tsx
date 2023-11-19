import React, { useState } from "react"
import { useProductDispatch, useProductSelector } from "../store"
import { decrementMonth, incrementMonth, selectCurrentProduct } from "../store/slices/productSlice"

const MonthInput: React.FC = () => {
    const product = useProductSelector(selectCurrentProduct)
    const month = useProductSelector((state) => state.products.month)
    const dispatch = useProductDispatch()

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp") {
            dispatch(incrementMonth(Number(product?.max_tenure)))
        } else if (e.key === "ArrowDown") {
            dispatch(decrementMonth(Number(product?.min_tenure)))
        }
    }

    return (
        <div className="flex-col justify-start items-start gap-2.5 inline-flex w-full">
            <label className="text-gray-800 text-sm font-normal font-['Work Sans'] leading-[21px]">
                Number of months
            </label>
            <div className="relative w-full">
                <div className="flex  items-center justify-between w-full h-[56px] rounded-lg border border-slate-200">
                    <button
                        onClick={() => dispatch(decrementMonth(Number(product?.min_tenure)))}
                        className="w-16 h-12 px-3 py-4 flex-col justify-center items-center inline-flex">
                        <img src="/assets/chevron-left.png" alt="arrow-up" />
                    </button>
                    <input
                        onKeyDown={handleKeyDown}
                        className="w-full h-full text-center text-gray-500  text-lg font-normal font-['Work Sans'] leading-[21px] px-4"
                        value={month}
                        type="number"
                        min={Number(product?.min_tenure)}
                        max={Number(product?.max_tenure)}
                        readOnly
                    />
                    <button
                        onClick={() => dispatch(incrementMonth(Number(product?.max_tenure)))}
                        className="w-16 h-12 px-3 py-4 flex-col justify-center items-center inline-flex">
                        <img src="/assets/chevron-right.png" alt="arrow-down" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MonthInput
