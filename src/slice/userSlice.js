import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserGithub: (state, action) => {
      const { username } = action.payload
      return username
    }
  }
})

export default userSlice.reducer
export const { setUserGithub } = userSlice.actions
