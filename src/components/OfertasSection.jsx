import { useEffect, useState } from 'react'
import { ListarOfertas } from './ListarOfertas'
import { PanelFiltros } from './PanelFiltros'
import { obtenerOfertas } from '../services/obtenerOfertas'

export const OfertasSection = ({ showModalFilter, toggleModalFilter }) => {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    obtenerOfertas()
      .then(ofertas => {
        setOffers(ofertas)
      })
  }, [])

  return (
    <section className='seccionOfertas flex md:grid gap-5 mx-4 my-1'>
      <PanelFiltros
        showModalFilter={showModalFilter}
        toggleModalFilter={toggleModalFilter}
      />
      <ListarOfertas ofertas={offers} />
    </section>
  )
}
