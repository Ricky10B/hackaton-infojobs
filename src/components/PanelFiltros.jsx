import { ItemFiltro } from './ItemFiltro'
import { useAppSelector } from '../hooks/useStore'
import { BtnCerrarModal } from './BtnCerrarModal'
import { useModalActions } from '../hooks/useModalActions'
import { useFilters } from '../hooks/useFilters'

export const PanelFiltros = () => {
  const modalFilter = useAppSelector(state => state.modalsSlice.modalFilter)
  const { toggleModals } = useModalActions()
  const { filtersOffers } = useFilters()

  const handleModalFilter = () => {
    toggleModals('modalFilter', false)
  }

  return (
    <aside className={`${modalFilter ? 'visible' : 'invisible'} md:visible bg-[var(--bg-item-offer)] rounded-md px-4 py-3 self-start fixed inset-0 z-20 overflow-auto md:sticky md:top-1 contenidoConScroll`}>
      <div className={`${modalFilter ? 'visible' : 'invisible'} p-2 absolute right-8 top-2 visible md:invisible [&>span]:inline-block`}>
        <BtnCerrarModal
          clickedModalUser={handleModalFilter}
        />
      </div>
      <div className='flex flex-col gap-10 h-[95vh] overflow-auto contenidoConScroll'>
        <fieldset>
          <legend className='font-medium py-1'>Ordenar ofertas</legend>
          <ul className='flex flex-col gap-1'>
            {filtersOffers.sortOffers.dataFilters.map((oferta, i) => (
              <ItemFiltro
                key={oferta.value}
                contentLabel={oferta.text}
                value={oferta.value}
                nameInput='sortOffers'
                isChecked={oferta.isChecked}
                typeInput='radio'
                positionDataFilter={i}
              />
            ))}
          </ul>
        </fieldset>

        <fieldset>
          <legend className='font-medium py-1'>Fecha</legend>
          <ul className='flex flex-col gap-1'>
            {filtersOffers.dateOffer.dataFilters.map((oferta, i) => (
              <ItemFiltro
                key={oferta.value}
                contentLabel={oferta.text}
                value={oferta.value}
                nameInput='dateOffer'
                typeInput='radio'
                isChecked={oferta.isChecked}
                positionDataFilter={i}
              />
            ))}
          </ul>
        </fieldset>

        <fieldset>
          <legend className='font-medium py-1'>Modalidad</legend>
          <ul className='flex flex-col gap-1'>
            {filtersOffers.modality.dataFilters.map((oferta, i) => (
              <ItemFiltro
                key={oferta.value}
                contentLabel={oferta.text}
                nameInput='modality'
                typeInput='checkbox'
                value={oferta.value}
                isChecked={oferta.isChecked}
                positionDataFilter={i}
              />
            ))}
          </ul>
        </fieldset>

        <fieldset>
          <legend className='font-medium py-1'>Categoría del puesto</legend>
          <ul className='flex flex-col gap-2'>
            {filtersOffers.categoryOffer.dataFilters.map((oferta, i) => (
              <ItemFiltro
                key={oferta.value}
                contentLabel={oferta.text}
                nameInput='categoryOffer'
                typeInput='checkbox'
                value={oferta.value}
                isChecked={oferta.isChecked}
                positionDataFilter={i}
              />
            ))}
          </ul>
        </fieldset>

        <fieldset>
          <legend className='font-medium py-1'>Jornada laboral</legend>
          <ul className='flex flex-col gap-2'>
            {filtersOffers.workDay.dataFilters.map((oferta, i) => (
              <ItemFiltro
                key={oferta.value}
                contentLabel={oferta.text}
                nameInput='workDay'
                typeInput='checkbox'
                value={oferta.value}
                isChecked={oferta.isChecked}
                positionDataFilter={i}
              />
            ))}
          </ul>
        </fieldset>

        <fieldset>
          <legend className='font-medium py-1'>Tipo de contrato</legend>
          <ul className='flex flex-col gap-2'>
            {filtersOffers.contractType.dataFilters.map((oferta, i) => (
              <ItemFiltro
                key={oferta.value}
                contentLabel={oferta.text}
                nameInput='contractType'
                typeInput='checkbox'
                value={oferta.value}
                isChecked={oferta.isChecked}
                positionDataFilter={i}
              />
            ))}
          </ul>
        </fieldset>
      </div>
    </aside>
  )
}
