import { configureStore } from '@reduxjs/toolkit'
import offersSlice from '../slice/offersSlice'
import userSlice from '../slice/userSlice'
import modalsSlice from '../slice/modalsSlice'
import filtersSlice from '../slice/filtersSlice'

const persistenceLocalStoreMiddleware = (store) => (next) => (action) => {
  next(action)
  const state = store.getState()
  const { userSlice, modalsSlice, filtersSlice } = state

  action.type.startsWith('user/') && localStorage.setItem('__USER_STORE__', JSON.stringify(userSlice))
  action.type.startsWith('modals/') && localStorage.setItem('__MODALS_STORE__', JSON.stringify(modalsSlice))
  action.type.startsWith('filters/') && localStorage.setItem('__FILTERS_STORE__', JSON.stringify(filtersSlice))
}

export const store = configureStore({
  reducer: {
    offersSlice,
    userSlice,
    modalsSlice,
    filtersSlice
  },
  middleware: [persistenceLocalStoreMiddleware]
})
