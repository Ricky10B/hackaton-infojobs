import { Pagination } from './Pagination'
import { Oferta } from './Oferta'
import { useAppSelector } from '../hooks/useStore'

export const ListarOfertas = () => {
  const listOffers = useAppSelector(state => state.offersSlice.listOffers)

  return (
    <section className='w-full'>
      <ul className='flex flex-col gap-2'>
        {listOffers?.map(oferta => {
          return (
            <Oferta
              key={oferta.id}
              oferta={oferta}
            />
          )
        })}
      </ul>
      <Pagination />
    </section>
  )
}
