import { configureStore } from "@reduxjs/toolkit";
import { wishlistSlice } from "./slices/wishlistSlice";

const store = configureStore({
    reducer: {
        wishlist: wishlistSlice.reducer
    }
})

export default store