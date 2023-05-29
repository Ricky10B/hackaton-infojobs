import { useAppDispatch } from './useStore'
import { setOffersList } from '../slice/offersSlice'

export const useOffersAction = () => {
  const dispatch = useAppDispatch()

  const handleSetOffers = (offers) => {
    window.scrollTo(0, 0)
    history.pushState({}, null, `?page=${offers.currentPage}`)
    dispatch(setOffersList(offers))
  }

  return { handleSetOffers }
}
