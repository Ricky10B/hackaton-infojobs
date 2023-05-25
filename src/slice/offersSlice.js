import { createSlice } from '@reduxjs/toolkit'
import offers from '../../public/offers.json'

const initialState = {
  listOffers: offers.items,
  currentPage: offers.currentPage,
  totalResults: offers.totalResults,
  totalPages: offers.totalPages,
  queryParameters: offers.queryParameters
}

export const offerSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffersList: (state, action) => {
      console.log(state, action)
      return state
    }
  }
})

export default offerSlice.reducer

export const { setOffersList } = offerSlice.actions
