import { createSlice } from '@reduxjs/toolkit'
import { initialStateFilters } from '../consts'

let pageForDefault = new URLSearchParams(window.location.search).get('page')
pageForDefault = pageForDefault === 'undefined' || Number(pageForDefault) < 1 ? '1' : pageForDefault

const initialState = (() => {
  const filtersStore = localStorage.getItem('__FILTERS_STORE__')
  return filtersStore
    ? {
        ...JSON.parse(filtersStore),
        pages: {
          ...JSON.parse(filtersStore)?.pages,
          value: `page=${pageForDefault}`
        }
      }
    : initialStateFilters
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
    },
    goToPage: (state, action) => {
      const { page } = action.payload
      if (Number(page) < 1) return state

      return {
        ...state,
        pages: {
          ...state.pages,
          value: `page=${page}`
        }
      }
    },
    setQueryParam: (state, action) => {
      const { query } = action.payload

      return {
        ...initialStateFilters,
        query: {
          ...initialStateFilters.query,
          value: `q=${query}`
        }
      }
    },
    resetFilters: () => {
      return {
        ...initialStateFilters,
        pages: {
          ...initialStateFilters.pages,
          value: 'page=1'
        }
      }
    }
  }
})

export default filtersSlice.reducer

export const { setFilters, resetFilters, goToPage, setQueryParam } = filtersSlice.actions
