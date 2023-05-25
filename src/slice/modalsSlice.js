import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalUser: false,
  modalFilter: false
}

export const modalsSlice = createSlice({
  name: 'modalsSlice',
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
