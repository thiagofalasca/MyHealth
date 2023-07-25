import { createSlice } from "@reduxjs/toolkit"

const initialValues = {
    vaccineList: []
}

export const vaccineListSlice = createSlice({
    name: 'vaccineList',
    initialState: initialValues,
    reducers: {
        reducerSetVaccineList: (state, action) => {
            state.vaccineList = action.payload.vaccineList
        }
    }
})

export const { reducerSetVaccineList } = vaccineListSlice.actions

export default vaccineListSlice.reducer