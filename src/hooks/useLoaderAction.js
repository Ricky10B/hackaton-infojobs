import { setLoader } from '../slice/loaderSlice'
import { useAppDispatch } from './useStore'

export const useLoaderAction = () => {
  const dispatch = useAppDispatch()

  const setLoaderSlice = (showLoader) => {
    dispatch(setLoader({ showLoader }))
  }

  return { setLoaderSlice }
}
