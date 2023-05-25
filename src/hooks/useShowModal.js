import { useModalActions } from './useModalActions'

export const useModal = () => {
  const { toggleModals } = useModalActions()

  return { toggleModals }
}
