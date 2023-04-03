import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    user: null,
}

export const counterSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            console.log("action", action.payload)
            state.user = action.payload
            state.isLoggedIn = true;
        },
    },
})
export const { userLogin } = counterSlice.actions

export default counterSlice.reducer