import './App.css'
import { IconoFiltrar } from './components/LogosInfojobs.jsx'
import { OfertasSection } from './components/OfertasSection'
import { ModalUser } from './components/ModalUser'
import { HeaderPrincipal } from './components/HeaderPrincipal'
import { useModal } from './hooks/useShowModal'
import { useAppSelector } from './hooks/useStore'

function App () {
  const offers = useAppSelector(state => state.offersSlice)
  const { toggleModals } = useModal()

  const toggleModalFilter = (showModal) => {
    toggleModals({ type: 'filter', showModal })
  }

  return (
    <>
      <HeaderPrincipal />
      <main className='my-2'>
        <div className='flex justify-between items-center mx-4'>
          <p className='my-1 w-full overflow-hidden text-ellipsis whitespace-nowrap'>
            {offers?.totalResults} ofertas de <span className='font-bold'>{offers?.queryParameters?.query}</span>
          </p>
          <button
            className='flex items-center gap-1 hover:bg-[var(--hover-botones)] rounded-lg px-3 py-2 font-semibold uppercase text-[var(--color-logo-infojobs)] visible md:invisible'
            onClick={() => toggleModalFilter(true)}
          >
            <span>Filtrar</span>
            <span><IconoFiltrar /></span>
          </button>
        </div>
        <OfertasSection />
      </main>
      <ModalUser />
    </>
  )
}

export default App
