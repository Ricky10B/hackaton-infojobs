import { useState } from 'react'
import { ListarOfertas } from './ListarOfertas'
import { PanelFiltros } from './PanelFiltros'
// import { obtenerOfertas } from '../services/obtenerOfertas'
import { useAppSelector } from '../hooks/useStore'

export const OfertasSection = () => {
  const offers = useAppSelector(state => state.offersSlice)
  const [filterOffer, setFilter] = useState('')

  // useEffect(() => {
  //   obtenerOfertas()
  //     .then(ofertas => {
  //       setOffers(ofertas)
  // setListOffers(ofertas)
  //     })
  // }, [])

  const sortBy = (valor) => {
    // console.log({ valor, offersJson })
    const newListOffers = offers?.listOffers?.filter(offer => {
      if (valor === '') return offer
      return offer.teleworking.value.localeCompare(
        valor, 'es',
        { sensitivity: 'base' }
      ) === 0
    })
    return newListOffers
  }

  const sortByModality = (valor) => {
    console.log(valor)
    setFilter(valor)
  }

  const ofertasFiltradas = sortBy(filterOffer)

  return (
    <section className='seccionOfertas flex md:grid gap-5 mx-4 my-1'>
      <PanelFiltros
        sortByModality={sortByModality}
      />
      <ListarOfertas
        ofertas={ofertasFiltradas}
      />
    </section>
  )
}
