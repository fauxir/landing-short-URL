import  { createSlice } from '@reduxjs/toolkit'

const dataListSlice = createSlice({
    name: 'dataList',
    initialState: {
        value: ""
      },

      reducers: {
        update: (state, action) => {
            state.value += action.payload
      }
}})

export const { update } = dataListSlice.actions
export default dataListSlice.reducer;