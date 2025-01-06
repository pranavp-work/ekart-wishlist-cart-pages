import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        // to add items to the state
        addWishlistItems: (state, action) => {
            state.push(action.payload)
        },
        removeWishlistItems: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})

export const {addWishlistItems, removeWishlistItems} = wishlistSlice.actions
export default wishlistSlice.reducer