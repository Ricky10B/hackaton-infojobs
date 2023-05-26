import { useAppDispatch } from './useStore'
import { setFilters } from '../slice/filtersSlice'

export const useFiltersAction = () => {
  const dispatch = useAppDispatch()

  const handleSetFilters = (
    name,
    newValueFilter,
    positionDataFilter,
    checked
  ) => {
    dispatch(setFilters({
      name,
      newValueFilter,
      positionDataFilter,
      checked
    }))
  }

  return { handleSetFilters }
}
