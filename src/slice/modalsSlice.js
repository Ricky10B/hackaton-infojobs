import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const modalsStore = localStorage.getItem('__MODALS_STORE__')
  return {
    modalUser: JSON.parse(modalsStore)?.modalUser ?? true,
    modalFilter: JSON.parse(modalsStore)?.modalFilter ?? false
  }
})()

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModal: (state, action) => {
      const { type, showModal } = action.payload
      return type === 'user'
        ? { ...state, modalUser: showModal }
        : { ...state, modalFilter: showModal }
    }
  }
})

export default modalsSlice.reducer
export const { setModal } = modalsSlice.actions
