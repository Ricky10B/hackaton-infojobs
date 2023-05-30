import { useAppDispatch } from './useStore'
import { setOffersList } from '../slice/offersSlice'

export const useOffersAction = () => {
  const dispatch = useAppDispatch()

  const handleSetOffers = (offers) => {
    window.scrollTo(0, 0)
    dispatch(setOffersList(offers))
  }

  return { handleSetOffers }
}
