import { configureStore } from '@reduxjs/toolkit'
import offersSlice from '../slice/offersSlice'
import userSlice from '../slice/userSlice'
import modalsSlice from '../slice/modalsSlice'

export const store = configureStore({
  reducer: {
    offersSlice,
    userSlice,
    modalsSlice
  }
})
