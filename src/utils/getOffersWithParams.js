import { obtenerOfertas } from '../services/obtenerOfertas'
import { getQueryParams } from './getQueryParams'

export const getOffersWithParams = (filtersOffers) => {
  const queryParams = getQueryParams(filtersOffers)

  return obtenerOfertas(queryParams)
}
