import { usePagination } from '../hooks/usePagination'
import { useAppSelector } from '../hooks/useStore'
import { pagination } from '../utils/pagination'
import { BotonPaginacion } from './BotonPaginacion'
import { IconoFlechaAnterior, IconoFlechaSiguiente } from './LogosInfojobs'
import { useFiltersAction } from '../hooks/useFiltersAction'

export const Pagination = () => {
  const { showPages } = usePagination()
  const offers = useAppSelector(state => state.offersSlice)
  const { handleGoToPage } = useFiltersAction()

  const goToPage = (page) => {
    if (Number(page) < 1 || page === '...') return
    handleGoToPage(page)
    history.pushState({}, null, `?page=${page}`)
  }

  return (
    <div>
      <ul
        className='flex gap-1 py-4 justify-center items-center smallPagination sm:bigPagination'
      >
        {offers?.currentPage !== 1 && offers.totalPages > 1 && (
          <li
            className='leading-5 h-10'
            onClick={() => goToPage(offers.currentPage - 1)}
          >
            <BotonPaginacion>
              <span className='pt-[2px] [&>svg]:stroke-[4] [&>svg]:sm:stroke-2'>
                <IconoFlechaAnterior fill='#2088c2' />
              </span>
              <span className='hidden md:block'>Anterior</span>
            </BotonPaginacion>
          </li>)}

        {pagination(offers.currentPage, offers.totalPages, showPages, showPages === 5 ? 3 : 2).map((pagina, indice, array) => {
          const numeroPagina = Number(pagina)
          const isFirst = indice === 0 && numeroPagina !== 1
          const isLast = indice === array.length - 1 && numeroPagina !== offers.totalPages
          const notIsPagina = isFirst || isLast
          const page = notIsPagina ? '...' : pagina

          return (
            <li
              key={pagina}
              className='leading-5 h-10'
              onClick={() => goToPage(page)}
            >
              <button className={`bg-[var(--bg-botones-paginacion)] py-3 px-4 text-sm md:text-base rounded-lg text-gray-100 font-bold ${page !== '...' && 'hover:bg-[--bg-botones-paginacion-hover]'}`}>
                <span>{page}</span>
              </button>
            </li>
          )
        })}

        {offers?.currentPage !== offers.totalPages && (
          <li
            className='leading-5 h-10'
            onClick={() => goToPage(offers.currentPage + 1)}
          >
            <BotonPaginacion>
              <span className='hidden md:block'>Siguiente</span>
              <span className='pt-[2px] [&>svg]:stroke-[4] [&>svg]:sm:stroke-2'>
                <IconoFlechaSiguiente fill='#2088c2' />
              </span>
            </BotonPaginacion>
          </li>)}
      </ul>
    </div>
  )
}
