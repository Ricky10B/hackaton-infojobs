import { useFiltersAction } from '../hooks/useFiltersAction'
import { useAppSelector } from '../hooks/useStore'

export const ItemFiltro = ({
  typeInput,
  nameInput,
  contentLabel,
  isChecked,
  value,
  positionDataFilter,
  dataFilters
}) => {
  const filtersOffers = useAppSelector(state => state.filtersSlice)
  const { handleSetFilters } = useFiltersAction()

  const handleSort = (e) => {
    const { value, checked, name, type } = e.target
    // Se construye el key value en un string
    // que se le pasara al URLSearchParams
    const dataQuery = `${filtersOffers[name].key}=${value}`

    // Agregar o eliminar el key value del string
    // si el input está checkeado o no
    let newValueFilter = dataQuery
    let newDataFilters = structuredClone(dataFilters)

    if (type === 'checkbox') {
      newValueFilter = filtersOffers[name].value + '&' + dataQuery

      // Elimina el key value del string
      if (!checked) {
        newValueFilter = newValueFilter.split(dataQuery).join('')
      }
    }

    if (type === 'radio') {
      // Eliminar el checkeo de todos los inputs de tipo radio
      // para que el filtrado funcione correctamente
      newDataFilters = newDataFilters.map(dataFilter => ({
        ...dataFilter,
        isChecked: false
      }))
    }

    // Actualización del input de filtrado
    // de checkeado o no en los dataFilters
    // de cada sección de filtrado
    newDataFilters[positionDataFilter] = {
      ...newDataFilters[positionDataFilter],
      isChecked: checked
    }

    handleSetFilters(name, newValueFilter, newDataFilters)
  }

  return (
    <li>
      <label className='flex gap-1 items-start'>
        <input
          type={typeInput}
          name={nameInput}
          className='mt-1'
          checked={isChecked}
          value={value}
          onChange={handleSort}
        />
        <p className='text-sm text-[var(--color-texto-categorias)]'>{contentLabel}</p>
      </label>
    </li>
  )
}
