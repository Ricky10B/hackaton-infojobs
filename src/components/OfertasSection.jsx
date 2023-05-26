import { ListarOfertas } from './ListarOfertas'
import { PanelFiltros } from './PanelFiltros'
// import { useFilters } from '../hooks/useFilters'

// import { obtenerOfertas } from '../services/obtenerOfertas'

export const OfertasSection = () => {
  // const { ofertasFiltradas } = useFilters()
  // useEffect(() => {
  //   obtenerOfertas()
  //     .then(ofertas => {
  //       setOffers(ofertas)
  // setListOffers(ofertas)
  //     })
  // }, [])

  return (
    <section className='seccionOfertas flex md:grid gap-5 mx-4 my-1'>
      <PanelFiltros />
      <ListarOfertas />
    </section>
  )
}
