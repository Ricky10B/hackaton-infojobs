import { createSlice } from '@reduxjs/toolkit'
import offers from '../../public/offers.json'

const dataUsedOfOffers = ['id', 'title', 'province', 'city', 'link', 'contractType', 'workDay', 'teleworking', 'published', 'updated', 'author', 'requirementMin', 'bold', 'salaryDescription']

const initialState = {
  listOffers: offers.items.map(item => {
    const filterDataOffers = Object.keys(item).filter(i => dataUsedOfOffers.includes(i))
    const offers = filterDataOffers.map(data => [data, item[data]])
    return Object.fromEntries(offers)
  }),
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
