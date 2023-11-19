import { configureStore } from "@reduxjs/toolkit"
import products from "./slices/productSlice"
import { getProduct } from "./slices/productSlice"
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"
const store = configureStore({
    reducer: { products },
})

store.dispatch(getProduct())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useProductSelector: TypedUseSelectorHook<RootState> = useSelector
export const useProductDispatch = () => useDispatch<AppDispatch>()

export default store
