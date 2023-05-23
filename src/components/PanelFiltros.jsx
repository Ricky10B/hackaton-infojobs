import { ItemFiltro } from './ItemFiltro'
import { IconoEquis } from './LogosInfojobs'

export const PanelFiltros = ({ showModalFilter, toggleModalFilter }) => {
  return (
    <aside className={`${showModalFilter ? 'visible' : 'invisible'} md:visible bg-white rounded-md px-4 py-3 self-start fixed inset-0 z-20 overflow-auto md:sticky md:top-1 contenidoConScroll`}>
      <span
        className={`${showModalFilter ? 'visible' : 'invisible'} text-[#2088c2] cursor-pointer p-1 mb-1 rounded-full hover:bg-gray-200 absolute right-0 top-[1%] visible md:invisible`}
        onClick={() => toggleModalFilter(false)}
      >
        <IconoEquis strokeWidth='4' />
      </span>
      <div className='flex flex-col gap-4 h-[95vh] overflow-auto contenidoConScroll'>
        <fieldset>
          <legend className='font-medium py-1'>Ordenar ofertas</legend>
          <ul className='flex flex-col gap-1'>
            <ItemFiltro contentLabel='Fecha de publicación' nameInput='ordenOfertas' typeInput='radio' />
            <ItemFiltro contentLabel='Relevancia' nameInput='ordenOfertas' typeInput='radio' />
          </ul>
        </fieldset>

        <fieldset>
          <legend className='font-medium py-1'>Fecha</legend>
          <ul className='flex flex-col gap-1'>
            <ItemFiltro contentLabel='Cualquier fecha' nameInput='desdeFecha' typeInput='radio' />
            <ItemFiltro contentLabel='Últimas 24 Horas' nameInput='desdeFecha' typeInput='radio' />
            <ItemFiltro contentLabel='Últimas 7 Días' nameInput='desdeFecha' typeInput='radio' />
            <ItemFiltro contentLabel='Últimas 15 Días' nameInput='desdeFecha' typeInput='radio' />
          </ul>
        </fieldset>

        <fieldset>
          <legend className='font-medium py-1'>Modalidad</legend>
          <ul className='flex flex-col gap-1'>
            <ItemFiltro contentLabel='Híbrido' nameInput='modalidad' typeInput='checkbox' />
            <ItemFiltro contentLabel='Remoto' nameInput='modalidad' typeInput='checkbox' />
            <ItemFiltro contentLabel='Presencial' nameInput='modalidad' typeInput='checkbox' />
            <ItemFiltro contentLabel='Sin especificar' nameInput='modalidad' typeInput='checkbox' />
          </ul>
        </fieldset>

        <fieldset>
          <legend className='font-medium py-1'>Categoría del puesto</legend>
          <ul className='flex flex-col gap-2'>
            <ItemFiltro contentLabel='Administración de empresas' nameInput='categoria' typeInput='checkbox' />
            <ItemFiltro contentLabel='Administración Pública' nameInput='categoria' typeInput='checkbox' />
            <ItemFiltro contentLabel='Calidad, producción e I+D' nameInput='categoria' typeInput='checkbox' />
            <ItemFiltro contentLabel='Compras, logística y almacén' nameInput='categoria' typeInput='checkbox' />
            <ItemFiltro contentLabel='Diseño y artes gráficas' nameInput='categoria' typeInput='checkbox' />
            <ItemFiltro contentLabel='Finanzas y banca' nameInput='categoria' typeInput='checkbox' />
            <ItemFiltro contentLabel='Informática y telecomunicaciones' nameInput='categoria' typeInput='checkbox' />
          </ul>
        </fieldset>
      </div>
    </aside>
  )
}
