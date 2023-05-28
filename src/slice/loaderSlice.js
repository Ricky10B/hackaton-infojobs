import { createSlice } from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    showLoader: false
  },
  reducers: {
    setLoader: (state, action) => {
      return {
        showLoader: action.payload.showLoader
      }
    }
  }
})

export default loaderSlice.reducer

export const { setLoader } = loaderSlice.actions
