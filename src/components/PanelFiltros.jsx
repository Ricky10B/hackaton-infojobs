import { ItemFiltro } from './ItemFiltro'
import { useAppSelector } from '../hooks/useStore'
import { useModal } from '../hooks/useShowModal'
import { BtnCerrarModal } from './BtnCerrarModal'

export const PanelFiltros = ({ sortByModality }) => {
  const { modalFilter } = useAppSelector(state => state.modalsSlice)
  const { toggleModals } = useModal()

  const handleModalFilter = () => {
    toggleModals({ type: 'filter', showModal: false })
  }

  return (
    <aside className={`${modalFilter ? 'visible' : 'invisible'} md:visible bg-[var(--bg-item-offer)] rounded-md px-4 py-3 self-start fixed inset-0 z-20 overflow-auto md:sticky md:top-1 contenidoConScroll`}>
      {/* 2088c2 */}
      {/* #002388 */}
      <BtnCerrarModal
        clickedModalUser={handleModalFilter}
        customStyles={`${modalFilter ? 'visible' : 'invisible'} p-2 absolute right-[2%] top-[1%] visible md:invisible`}
      />
      <div className='flex flex-col gap-4 h-[95vh] overflow-auto contenidoConScroll'>
        <fieldset>
          <legend className='font-medium py-1'>Ordenar ofertas</legend>
          <ul className='flex flex-col gap-1'>
            <ItemFiltro contentLabel='Fecha de publicación' nameInput='ordenOfertas' typeInput='radio' />
            <ItemFiltro contentLabel='Relevancia' nameInput='ordenOfertas' typeInput='radio' checked />
          </ul>
        </fieldset>

        <fieldset>
          <legend className='font-medium py-1'>Fecha</legend>
          <ul className='flex flex-col gap-1'>
            <ItemFiltro
              contentLabel='Cualquier fecha'
              nameInput='desdeFecha'
              typeInput='radio'
              checked
            />
            <ItemFiltro
              contentLabel='Últimas 24 Horas'
              nameInput='desdeFecha'
              typeInput='radio'
            />
            <ItemFiltro
              contentLabel='Últimas 7 Días'
              nameInput='desdeFecha'
              typeInput='radio'
            />
            <ItemFiltro
              contentLabel='Últimas 15 Días'
              nameInput='desdeFecha'
              typeInput='radio'
            />
          </ul>
        </fieldset>

        <fieldset>
          <legend className='font-medium py-1'>Modalidad</legend>
          <ul className='flex flex-col gap-1'>
            <ItemFiltro
              contentLabel='Híbrido'
              nameInput='modalidad'
              typeInput='checkbox'
              value='Hibrido'
              sortByModality={sortByModality}
            />
            <ItemFiltro
              contentLabel='Remoto'
              nameInput='modalidad'
              typeInput='checkbox'
              value='Remoto'
              sortByModality={sortByModality}
            />
            <ItemFiltro
              contentLabel='Presencial'
              nameInput='modalidad'
              typeInput='checkbox'
              value='Presencial'
              sortByModality={sortByModality}
            />
            <ItemFiltro
              contentLabel='Sin especificar'
              nameInput='modalidad'
              typeInput='checkbox'
              value='Sin especificar'
              sortByModality={sortByModality}
            />
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
