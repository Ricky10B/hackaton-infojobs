import { ListarOfertas } from './ListarOfertas'
import { PanelFiltros } from './PanelFiltros'

export const OfertasSection = () => {
  return (
    <section className='seccionOfertas flex md:grid gap-5 mx-4 my-1'>
      <PanelFiltros />
      <ListarOfertas />
    </section>
  )
}
