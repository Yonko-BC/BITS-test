import { useProductSelector } from "../store/index"
import { selectCurrentProduct } from "../store/slices/productSlice"
import React from "react"
import MonthInput from "./MonthInput"
import AmountInput from "./AmountInput"
import IconsLoan from "./IconsLoan"
import DetailsLoan from "./DetailsLoan"

const FormLoan = () => {
    const product = useProductSelector(selectCurrentProduct)
    return (
        <div className="max-w-[560px] w-full min-h-[511px] relative bg-white rounded-lg shadow py-6 px-10">
            <IconsLoan />

            <div className="w-full h-auto flex justify-center items-center flex-col md:flex-row gap-4  py-4">
                <div className="flex-col justify-start items-start gap-2.5 inline-flex w-full md:max-w-[50%]">
                    <AmountInput />
                </div>
                <div className="flex-col justify-start items-start gap-2.5 inline-flex w-full md:max-w-[50%]">
                    <MonthInput />
                </div>
            </div>
            <div className="w-full  flex justify-center items-center  py-2">
                <DetailsLoan />
            </div>
            <div className="flex justify-center items-center py-6 w-full">
                <button
                    className="w-full md:w-[320px] h-[56px] py-4 bg-blue-800 rounded-[32px] justify-center items-center text-center text-white text-base font-semibold font-['Work Sans'] leading-tight "
                    onClick={() => console.log(product)}>
                    Apply Now
                </button>
            </div>
        </div>
    )
}

export default FormLoan
