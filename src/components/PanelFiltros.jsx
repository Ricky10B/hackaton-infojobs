import { ItemFiltro } from './ItemFiltro'
import { useAppSelector } from '../hooks/useStore'
import { BtnCerrarModal } from './BtnCerrarModal'
import { useEffect } from 'react'
import { useModalActions } from '../hooks/useModalActions'

export const PanelFiltros = () => {
  const filtersOffers = useAppSelector(state => state.filtersSlice)
  const modalFilter = useAppSelector(state => state.modalsSlice.modalFilter)
  const { toggleModals } = useModalActions()

  const handleModalFilter = () => {
    toggleModals({ type: 'filter', showModal: false })
  }

  useEffect(() => {
    const stringQueryParams = Object.keys(filtersOffers)
      .reduce((totalString, offer) =>
        totalString + filtersOffers[offer].value + '&', ''
      )

    const searchParams = new URLSearchParams(stringQueryParams)
    console.log(searchParams.toString())
    // sortByModality && sortByModality(checked ? value : '')
  }, [filtersOffers])

  return (
    <aside className={`${modalFilter ? 'visible' : 'invisible'} md:visible bg-[var(--bg-item-offer)] rounded-md px-4 py-3 self-start fixed inset-0 z-20 overflow-auto md:sticky md:top-1 contenidoConScroll`}>
      <BtnCerrarModal
        clickedModalUser={handleModalFilter}
        customStyles={`${modalFilter ? 'visible' : 'invisible'} p-2 absolute right-[2%] top-[1%] visible md:invisible`}
      />
      <div className='flex flex-col gap-4 h-[95vh] overflow-auto contenidoConScroll'>
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
      </div>
    </aside>
  )
}
