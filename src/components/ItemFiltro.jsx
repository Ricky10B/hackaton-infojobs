// import { useFilters } from '../hooks/useFilters'
import { useFiltersAction } from '../hooks/useFiltersAction'
import { useAppSelector } from '../hooks/useStore'

export const ItemFiltro = ({
  typeInput,
  nameInput,
  contentLabel,
  isChecked,
  value,
  positionDataFilter
}) => {
  const filtersOffers = useAppSelector(state => state.filtersSlice)
  const { handleSetFilters } = useFiltersAction()
  // const { sortByModality } = useFilters()
  const handleSort = (e) => {
    const { value, checked, name, type } = e.target
    // Se construye el key value en un string
    // que se le pasara al URLSearchParams
    const dataQuery = `${filtersOffers[name].key}=${value}`

    // Agregar o eliminar el key value del string
    // si el input está checkeado o no
    let newValueFilter = dataQuery
    if (type === 'checkbox') {
      newValueFilter = filtersOffers[name].value + '&' + dataQuery

      // Elimina el key value del string
      if (!checked) {
        newValueFilter = newValueFilter.split(dataQuery).join('')
      }
    }

    handleSetFilters(name, newValueFilter, positionDataFilter, checked)
  }

  return (
    <li>
      <label className='flex gap-1 items-start'>
        <input
          type={typeInput}
          name={nameInput}
          className='mt-1'
          defaultChecked={isChecked}
          value={value}
          onChange={handleSort}
        />
        <p className='text-sm text-[var(--color-texto-categorias)]'>{contentLabel}</p>
      </label>
    </li>
  )
}
