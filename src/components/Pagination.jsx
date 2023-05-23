import { usePagination } from '../hooks/usePagination'
import { pagination } from '../utils/pagination'
import { IconoFlechaAnterior, IconoFlechaSiguiente } from './LogosInfojobs'

export const Pagination = ({ ofertas }) => {
  const { showPages } = usePagination()

  return (
    <div>
      <ul
        className='flex gap-1 py-4 justify-center items-center smallPagination sm:bigPagination'
      >
        <li className='leading-5 h-10'>
          <button className='text-[#2088c2] flex items-center rounded-lg font-semibold py-3 px-4 text-sm md:text-base hover:bg-blue-100'>
            <span className='pt-[2px] [&>svg]:stroke-[4] [&>svg]:sm:stroke-2'>
              <IconoFlechaAnterior fill='#2088c2' />
            </span>
            <span className='hidden md:block'>Anterior</span>
          </button>
        </li>

        {pagination(ofertas.currentPage, ofertas.totalPages, showPages, 3).map((pagina, indice, array) => {
          const numeroPagina = Number(pagina)
          const isFirst = indice === 0 && numeroPagina !== 1
          const isLast = indice === array.length - 1 && numeroPagina !== ofertas.totalPages
          const notIsPagina = isFirst || isLast

          return (
            <li key={pagina} className='leading-5 h-10'>
              <button className='bg-[#2088c2] py-3 px-4 text-sm md:text-base rounded-lg text-gray-100 font-bold hover:bg-blue-500'>
                <span>{notIsPagina ? '...' : pagina}</span>
              </button>
            </li>
          )
        })}

        <li className='leading-5 h-10'>
          <button className='text-[#2088c2] flex items-center rounded-lg font-semibold py-3 px-4 text-sm md:text-base hover:bg-blue-100'>
            <span className='hidden md:block'>Siguiente</span>
            <span className='pt-[2px] [&>svg]:stroke-[4] [&>svg]:sm:stroke-2'>
              <IconoFlechaSiguiente fill='#2088c2' />
            </span>
          </button>
        </li>
      </ul>
    </div>
  )
}
