import { createSlice } from '@reduxjs/toolkit'
import { initialStateOffers } from '../consts'

const initialState = (() => {
  const offerStore = localStorage.getItem('__OFFER_STORE__')
  return offerStore ? JSON.parse(offerStore) : initialStateOffers
})()

export const offerSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffersList: (state, action) => {
      const {
        items,
        currentPage,
        totalResults,
        totalPages
      } = action.payload

      return {
        listOffers: items,
        currentPage,
        totalResults,
        totalPages
      }
    }
  }
})

export default offerSlice.reducer

export const { setOffersList } = offerSlice.actions
