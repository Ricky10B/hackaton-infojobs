import { createSlice } from '@reduxjs/toolkit'
import { initialStateFilters } from '../consts'

const initialState = (() => {
  const filtersStore = localStorage.getItem('__FILTERS_STORE__')
  return filtersStore ? JSON.parse(filtersStore) : initialStateFilters
})()

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      const { name, newValueFilter, positionDataFilter, checked } = action.payload

      // Actualización del input de filtrado
      // de chekeado o no en los dataFilters
      // de cada sección de filtrado
      const newDataFilters = [...state[name].dataFilters]
      const dataFilter = {
        ...newDataFilters[positionDataFilter],
        isChecked: checked
      }
      newDataFilters[positionDataFilter] = dataFilter

      // Actualización del valor del queryParam
      // y del dataFilters de una sección de
      // filtrado especifica
      const seccionFiltrado = {
        ...state[name],
        value: newValueFilter,
        dataFilters: newDataFilters
      }

      return {
        ...state,
        [name]: seccionFiltrado
      }
    }
  }
})

export default filtersSlice.reducer

export const { setFilters } = filtersSlice.actions
