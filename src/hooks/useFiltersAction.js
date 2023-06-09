import { useAppDispatch } from './useStore'
import { setFilters, resetFilters, goToPage, setQueryParam } from '../slice/filtersSlice'

export const useFiltersAction = () => {
  const dispatch = useAppDispatch()

  const handleSetFilters = (
    name,
    newValueFilter,
    dataFilters
  ) => {
    dispatch(setFilters({
      name,
      newValueFilter,
      dataFilters
    }))
  }

  const handleGoToPage = (page) => {
    dispatch(goToPage({ page }))
  }

  const handleQueryParam = (query) => {
    dispatch(setQueryParam({ query }))
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  return { handleSetFilters, handleResetFilters, handleGoToPage, handleQueryParam }
}
