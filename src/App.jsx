import { useState } from 'react'
import './App.css'
import { IconoFiltrar } from './components/LogosInfojobs.jsx'
import { OfertasSection } from './components/OfertasSection'
import { ModalUser } from './components/ModalUser'
import { HeaderPrincipal } from './components/HeaderPrincipal'

function App () {
  const [showModal, setShowModal] = useState(true)
  const [showModalFilter, setShowModalFilter] = useState(false)

  const toggleModalInsertUsername = (e, showHide) => {
    e?.preventDefault()
    setShowModal(showHide)
  }

  const toggleModalFilter = (showModal) => {
    setShowModalFilter(showModal)
  }

  return (
    <>
      <HeaderPrincipal
        toggleModalInsertUsername={toggleModalInsertUsername}
      />
      <main className='my-2'>
        {/* <p>{ofertas?.totalResults} ofertas de <span className='text-blue-600'>{ofertas?.queryParameters?.query}</span></p> */}
        <div className='flex justify-between items-center mx-4'>
          <p className='my-1 w-full overflow-hidden text-ellipsis whitespace-nowrap'>
            ofertas de <span className='text-blue-600' />
          </p>
          <button
            className='flex items-center gap-1 hover:bg-blue-100 rounded-lg px-3 py-2 font-semibold uppercase text-[#2088c2] visible md:invisible'
            onClick={() => toggleModalFilter(true)}
          >
            <span>Filtrar</span>
            <span><IconoFiltrar /></span>
          </button>
        </div>
        <OfertasSection
          showModalFilter={showModalFilter}
          toggleModalFilter={toggleModalFilter}
        />
      </main>
      <ModalUser
        showModal={showModal}
        toggleModalInsertUsername={toggleModalInsertUsername}
      />
    </>
  )
}

export default App
