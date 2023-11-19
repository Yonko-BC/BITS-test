import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from ".."

const orders = ["Automobile Loan", "Housing Loan", "Cash Loan"]

export const getProduct = createAsyncThunk("product/getProduct", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await fetch(`/products.json`)
        const data = await res.json()

        if (res.status >= 400) {
            throw new Error(data.message)
        }

        return data
    } catch (error: any) {
        return rejectWithValue(error.message)
    }
})

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
    success: false,
    month: 0,
    amount: "",
    selectedId: undefined,
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        incrementMonth: (state, { payload }) => {
            if (state.month < payload) {
                state.month += 1
            }
        },
        decrementMonth: (state, { payload }) => {
            console.log("state.month", state.month)
            console.log("payload", payload)
            if (state.month > payload) {
                state.month -= 1
            }
        },
        setSelectedProduct: (state, { payload }) => {
            state.selectedId = payload
            state.month = parseInt(
                state.products.find((product) => product.id === payload)?.min_tenure as string
            )
            state.amount = parseFloat(
                state.products.find((product) => product.id === payload)?.min_amount as string
            ).toLocaleString("en-US")
        },
        setAmount: (state, { payload }) => {
            state.amount = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getProduct.fulfilled, (state, { payload }) => {
            state.loading = false
            state.products = payload.toSorted((a: LoanProduct, b: LoanProduct) => {
                const aIndex = orders.indexOf(a.name)
                const bIndex = orders.indexOf(b.name)
                return aIndex - bIndex
            })
            state.month = parseInt(state.products[0].min_tenure)
            state.amount = parseFloat(state.products[0].min_amount).toLocaleString("en-US")
            state.selectedId = state.products[0].id
            state.success = true
        })
        builder.addCase(getProduct.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload as string
        })
    },
})

export const selectCurrentProduct = (state: RootState) => {
    return state.products.products.find((product) => product.id === state.products.selectedId)
}

export default productSlice.reducer
export const { incrementMonth, decrementMonth, setSelectedProduct, setAmount } =
    productSlice.actions
