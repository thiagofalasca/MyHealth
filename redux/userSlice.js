import { createSlice } from "@reduxjs/toolkit"

const initialValues = {
    userId: null,
    email: null,
    password: null,
    userName: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialValues,
    reducers: {
        reducerSetUser: (state, action) => {
            state.userId = action.payload.userId
            state.email = action.payload.email
            state.password = action.payload.password
            state.userName = action.payload.userName
        }
    }
})

export const { reducerSetUser } = userSlice.actions

export default userSlice.reducer