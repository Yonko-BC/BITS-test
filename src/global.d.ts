interface LoanProduct {
    id: string
    interest: string
    name: string
    min_amount: string
    max_amount: string
    min_tenure: string
    max_tenure: string
    image: string
}

interface ProductState {
    products: LoanProduct[]
    loading: boolean
    error: string | null
    success: boolean
    month: number
    amount: string
    selectedId: string | undefined
}
