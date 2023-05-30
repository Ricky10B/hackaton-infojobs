import './App.css'
import { IconoFiltrar } from './components/LogosInfojobs.jsx'
import { OfertasSection } from './components/OfertasSection'
import { ModalUser } from './components/ModalUser'
import { HeaderPrincipal } from './components/HeaderPrincipal'
import { useAppSelector } from './hooks/useStore'
import { useModalActions } from './hooks/useModalActions'
import { LoaderInfojobs } from './components/LoaderInfojobs'

function App () {
  console.log(process.env.VITE_API_INFOJOBS)
  console.log(import.meta.env.VITE_API_INFOJOBS)
  const totalResults = useAppSelector(state => state.offersSlice.totalResults)
  const showLoader = useAppSelector(state => state.loaderSlice.showLoader)
  const { value } = useAppSelector(state => state.filtersSlice.query)
  const error = useAppSelector(state => state.userSlice.error)

  const { toggleModals } = useModalActions()

  const toggleModalFilter = (showModal) => {
    toggleModals('modalFilter', showModal)
  }

  let responseQuery = 'las publicaciones recientes'
  if (value) {
    responseQuery = `${value.split('=')[1]} tu lenguaje más usado`
  }

  return (
    <>
      {showLoader && <LoaderInfojobs />}
      <HeaderPrincipal />
      <main className='my-2'>
        <div className='flex justify-between items-center mx-4'>
          {
            error
              ? (
                <p className='text-[var(--color-error)] font-semibold text-lg'>
                  {error}
                </p>)
              : (
                <p className='my-1 w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                  {totalResults} ofertas de <span className='font-bold'>{responseQuery}</span>
                </p>)
          }
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
