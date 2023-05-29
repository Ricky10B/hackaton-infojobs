import { setThemeApp, setUserGithub, setError } from '../slice/userSlice'
import { useAppDispatch } from './useStore'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const changeTheme = (themeApp) => {
    dispatch(setThemeApp({ themeApp }))
  }

  const changeUserGithub = (username) => {
    dispatch(setUserGithub({ username }))
  }

  const handleSetError = (error) => {
    dispatch(setError({ error }))
  }

  return { changeTheme, changeUserGithub, handleSetError }
}
