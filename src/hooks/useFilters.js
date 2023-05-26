import { useState } from 'react'
import ofertas from '../../public/offers.json'

export const useFilters = () => {
  const [filterOffer, setFilter] = useState(ofertas)

  const sortByModality = (offers, valor) => {
    const newListOffers = offers?.listOffers?.filter(offer => {
      if (valor === '') return offer
      return offer.teleworking.value.localeCompare(
        valor, 'es',
        { sensitivity: 'base' }
      ) === 0
    })
    return newListOffers
  }

  return { filterOffer, setFilter, sortByModality }
}
