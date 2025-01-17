import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        // to add items to the state
        addCartItems: (state, action) => {
            state.push(action.payload)
        },
        removeCartItems: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },
        emptyCart: (state) => {
            return state = []
        }
    }
})

export const {addCartItems, removeCartItems, emptyCart} = cartSlice.actions
export default cartSlice.reducer