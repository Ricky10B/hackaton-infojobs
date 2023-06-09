import { useEffect } from 'react'
import { useAppSelector } from './useStore'
import { getOffersWithParams } from '../utils/getOffersWithParams'
import { useOffersAction } from './useOffersActions'
import { useLoaderAction } from './useLoaderAction'
import { useUserActions } from './useUserActions'

export const useFilters = (showLoader = true) => {
  const filtersOffers = useAppSelector(state => state.filtersSlice)
  const { modalUser } = useAppSelector(state => state.modalsSlice)
  const error = useAppSelector(state => state.userSlice.error)

  const { handleSetOffers } = useOffersAction()
  const { setLoaderSlice } = useLoaderAction()
  const { handleSetError } = useUserActions()

  useEffect(() => {
    if (error) {
      handleSetError('Ocurrió un error inesperado al realizar la petición')
    }

    // No hacer la petición de traer ofertas
    // si cuando inicia se muestra el modal del usuario
    if (modalUser) return

    setLoaderSlice(showLoader)
    getOffersWithParams(filtersOffers)
      .then(offers => {
        if (offers.currentPage > offers.totalPages) {
          offers.currentPage = offers.totalPages
        }
        handleSetOffers(offers)
        history.pushState({}, null, `?page=${offers.currentPage}`)
      })
      .catch(err => {
        console.error(err)
        handleSetError('Ocurrió un error inesperado al realizar la petición')
      })
      .finally(() => {
        setLoaderSlice(false)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersOffers])

  return { filtersOffers }
}
