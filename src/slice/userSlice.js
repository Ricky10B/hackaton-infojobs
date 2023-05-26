import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const userStore = localStorage.getItem('__USER_STORE__')
  return {
    usernameGithub: JSON.parse(userStore)?.usernameGithub || '',
    themeApp: JSON.parse(userStore)?.themeApp || 'light'
  }
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
    }
  }
})

export default userSlice.reducer
export const { setUserGithub, setThemeApp } = userSlice.actions
