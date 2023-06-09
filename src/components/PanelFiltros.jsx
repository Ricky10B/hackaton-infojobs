import { ItemFiltro } from './ItemFiltro'
import { useAppSelector } from '../hooks/useStore'
import { BtnCerrarModal } from './BtnCerrarModal'
import { useModalActions } from '../hooks/useModalActions'
import { useFilters } from '../hooks/useFilters'
import { useMemo, useState } from 'react'

export const PanelFiltros = () => {
  const modalFilter = useAppSelector(state => state.modalsSlice.modalFilter)
  const { toggleModals } = useModalActions()
  const { filtersOffers } = useFilters(false)
  const [dataFilters, setDataFilters] = useState([])

  const handleModalFilter = () => {
    toggleModals('modalFilter', false)
  }

  useMemo(() => {
    const dataArrayFilters = Object.values(filtersOffers).filter(data => data.dataFilters)
    setDataFilters(dataArrayFilters)
  }, [filtersOffers])

  return (
    <aside className={`${modalFilter ? 'visible' : 'invisible'} md:visible bg-[var(--bg-item-offer)] rounded-md px-4 py-3 self-start fixed inset-0 z-20 overflow-auto md:sticky md:top-1 contenidoConScroll`}>
      <div className={`${modalFilter ? 'visible' : 'invisible'} p-2 absolute right-8 top-2 visible md:invisible [&>span]:inline-block`}>
        <BtnCerrarModal
          clickedModalUser={handleModalFilter}
        />
      </div>
      <div className='flex flex-col gap-10 h-[95vh] overflow-auto contenidoConScroll'>
        {dataFilters.map(dataFilter => {
          const { key, title, nameInput, typeInput, dataFilters } = dataFilter

          return (
            <fieldset key={key}>
              <legend className='font-medium py-1'>{title}</legend>
              <ul className='flex flex-col gap-1'>
                {dataFilters.map((oferta, i) => (
                  <ItemFiltro
                    key={oferta.value}
                    contentLabel={oferta.text}
                    value={oferta.value}
                    nameInput={nameInput}
                    isChecked={oferta.isChecked}
                    typeInput={typeInput}
                    dataFilters={dataFilters}
                    positionDataFilter={i}
                  />
                ))}
              </ul>
            </fieldset>
          )
        })}
      </div>
    </aside>
  )
}
