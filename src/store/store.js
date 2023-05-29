import { configureStore } from '@reduxjs/toolkit'
import offersSlice from '../slice/offersSlice'
import userSlice from '../slice/userSlice'
import modalsSlice from '../slice/modalsSlice'
import filtersSlice from '../slice/filtersSlice'
import loaderSlice from '../slice/loaderSlice'

const persistenceLocalStoreMiddleware = (store) => (next) => (action) => {
  next(action)
  const state = store.getState()
  const { userSlice, modalsSlice, filtersSlice, offersSlice } = state

  action.type.startsWith('user/') && localStorage.setItem('__USER_STORE__', JSON.stringify(userSlice))
  action.type.startsWith('modals/') && localStorage.setItem('__MODALS_STORE__', JSON.stringify(modalsSlice))
  action.type.startsWith('filters/') && localStorage.setItem('__FILTERS_STORE__', JSON.stringify(filtersSlice))
  action.type.startsWith('offers/') && localStorage.setItem('__OFFER_STORE__', JSON.stringify(offersSlice))
}

export const store = configureStore({
  reducer: {
    offersSlice,
    userSlice,
    modalsSlice,
    filtersSlice,
    loaderSlice
  },
  middleware: [persistenceLocalStoreMiddleware]
})
