import { setModal } from '../slice/modalsSlice'
import { useAppDispatch } from './useStore'

export const useModalActions = () => {
  const dispatch = useAppDispatch()

  const toggleModals = (type, showModal) => {
    dispatch(setModal({ type, showModal }))
  }

  return { toggleModals }
}
