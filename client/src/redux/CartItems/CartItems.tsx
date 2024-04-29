import { createSlice } from "@reduxjs/toolkit";

interface cart {
    isLoading: boolean | null,
    cartItems: {
        _id: string
        name: string | null,
        image: string | null,
        description: string | null,
        category: string | null,
        subCategory: string | null,
        price: number | null,
        countInStock: number | null,
        prescriptionRequired: Boolean | null,
        qty: number | null 
    }[] 
}

const initialState: cart = {
    isLoading: null,
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        CartInLoading: (state)=>{
            state.isLoading = true
        },
        AddItemInCart: (state, action)=>{
            const product = action.payload
            const existingItem = state.cartItems.find((p)=> p._id === product._id)
            if(existingItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((p)=> p._id === existingItem._id ? product : p)
                }
            }
            else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, product]
                }
            }
        },
        CartFinshedLoading: (state)=>{
            state.isLoading = false
        }
    }
})
export const {
    CartInLoading, AddItemInCart,   CartFinshedLoading
} = cartSlice.actions;
export default cartSlice.reducer;