import { createSlice } from '@reduxjs/toolkit'
import { initialStateUser } from '../consts'

const initialState = (() => {
  const userStore = localStorage.getItem('__USER_STORE__')
  return userStore
    ? {
        ...JSON.parse(userStore),
        error: ''
      }
    : initialStateUser
})()

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserGithub: (state, action) => {
      const { username } = action.payload

      return {
        ...state,
        usernameGithub: username
      }
    },
    setThemeApp: (state, action) => {
      return {
        ...state,
        themeApp: action.payload.themeApp
      }
    },
    setError: (state, action) => {
      const { error } = action.payload

      return {
        ...state,
        error
      }
    }
  }
})

export default userSlice.reducer
export const { setUserGithub, setThemeApp, setError } = userSlice.actions
