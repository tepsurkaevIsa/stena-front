import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./features/authSlice"
import postSlice from "./features/postSlice"
import commentSlice from "./features/commentSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice,
        comment: commentSlice,
    },
})
