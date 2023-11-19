import React from "react"
import { useProductDispatch, useProductSelector } from "../store"
import { selectCurrentProduct, setSelectedProduct } from "../store/slices/productSlice"

const styleImage: { [key: string]: string } = {
    Automobile: "w-[86px] h-[86px] rounded-full",
    Housing: "w-[74px] h-[69px] rounded-full",
    Cash: "w-[69px] h-[69px] rounded-full",
}

const IconsLoan = () => {
    const products = useProductSelector((state) => state.products.products)
    const selected = useProductSelector(selectCurrentProduct)
    const dispatch = useProductDispatch()

    console.log("tfsdsd", selected)
    return (
        <div className="w-full h-[86px] flex justify-center items-center gap-4 ">
            {products.map((item, index) => (
                <img
                    key={item.id}
                    className={`${styleImage[item.name.split(" ")[0]]} ${
                        selected?.id !== item.id && "opacity-50 hover:opacity-90 cursor-pointer"
                    }`}
                    src={item.image}
                    onClick={() => dispatch(setSelectedProduct(products[index].id))}
                />
            ))}
        </div>
    )
}

export default IconsLoan
