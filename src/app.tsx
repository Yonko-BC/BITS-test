import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import FormLoan from "@components/FormLoan"
import ProductProvider from "./store/productsProvider"

const App = () => (
    <ProductProvider>
        <div className=" w-full h-full flex flex-col justify-center items-center gap-4 bg-gray-50">
            <div className="max-w-[584px] w-full text-center">
                <span className="text-blue-800 text-xl font-normal font-['Work Sans'] leading-normal">
                    Let&apos;s plan your{" "}
                </span>
                <span className="text-blue-800 text-xl font-bold font-['Work Sans'] leading-normal">
                    loan.
                </span>
            </div>
            <FormLoan />
        </div>
    </ProductProvider>
)

ReactDOM.render(<App />, document.getElementById("root"))
