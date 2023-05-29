import { createSlice } from '@reduxjs/toolkit'
import { initialStateModals } from '../consts'

const initialState = (() => {
  const modalsStore = localStorage.getItem('__MODALS_STORE__')
  return modalsStore ? JSON.parse(modalsStore) : initialStateModals
})()

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModal: (state, action) => {
      const { type, showModal } = action.payload
      return {
        ...state,
        [type]: showModal
      }
    }
  }
})

export default modalsSlice.reducer
export const { setModal } = modalsSlice.actions
