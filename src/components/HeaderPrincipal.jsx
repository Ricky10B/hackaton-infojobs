import { useState } from 'react'
import { BtnCambiarTema } from './BtnCambiarTema'
import { BtnForm } from './BtnForm'
import { LogoInfojobs } from './LogosInfojobs'
import { useAppSelector } from '../hooks/useStore'
import { useModalActions } from '../hooks/useModalActions'
import { useFiltersAction } from '../hooks/useFiltersAction'

export const HeaderPrincipal = () => {
  const usernameGithub = useAppSelector(state => state.userSlice.usernameGithub)

  const { toggleModals } = useModalActions()
  const { handleQueryParam } = useFiltersAction()

  const [errorSearchOffers, setErrorSearchOffers] = useState({
    error: false,
    text: ''
  })

  const toggleModalInsertUsername = (showModal) => {
    toggleModals('modalUser', showModal)
  }

  const handleSubmitSearchOffers = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const searchOffer = formData.get('searchOffer')
    if (searchOffer.trim() === '') {
      setErrorSearchOffers({
        error: true,
        text: 'El campo de búsqueda es requerido'
      })
      return
    }

    // Elimina el mensaje de error si existe
    if (errorSearchOffers.error) {
      setErrorSearchOffers({
        error: false,
        text: ''
      })
    }

    handleQueryParam(searchOffer)
    form?.reset()
  }

  return (
    <header className='flex flex-col py-3 gap-2 mx-0 xl:mx-4 rounded-b-lg cabeceraPrincipal'>
      <div className='flex h-10 items-center justify-between mx-3 sm:mx-4'>
        <div className='flex'>
          <a
            href='https://www.infojobs.net/'
            target='_blank'
            rel='noreferrer'
          >
            <LogoInfojobs />
          </a>
        </div>
        <div className='flex items-center gap-3 sm:gap-5'>
          <div>
            <button
              className='border-2 border-[var(--border-usuario-github)] text-[var(--border-usuario-github)] dark:border-[var(--border-usuario-github)] dark:text-[var(--border-usuario-github)] rounded-lg p-[3px] sm:py-1 sm:px-2 font-bold shadow-lg backdrop-blur-md hover:opacity-70 whitespace-nowrap'
              onClick={() => toggleModalInsertUsername(true)}
            >{usernameGithub || 'Sin usuario'}
            </button>
          </div>
          <BtnCambiarTema />
        </div>
      </div>
      <section className='my-1'>
        <div className='flex justify-center items-center'>
          <div className='bg-[var(--bg-busqueda-ofertas)] rounded-md py-3 px-4 sm:py-6 w-[95%] sm:w-3/4 bg-opacity-60'>
            <form
              className='flex flex-col sm:flex-row items-start justify-start gap-1 sm:items-end sm:gap-3'
              onSubmit={handleSubmitSearchOffers}
            >
              <div className='w-full sm:w-[85%]'>
                <label htmlFor='searchOffer' className='text-white'>Busco ofertas de...</label>
                <input
                  id='searchOffer'
                  name='searchOffer'
                  placeholder='Puesto, empresa o palabra clave'
                  className={`w-full px-2 py-1 rounded-md outline-none border focus:border-[var(--color-logo-infojobs)] ${errorSearchOffers.error ? 'border-[var(--color-error)]' : 'border-transparent'}`}
                  autoComplete='off'
                  maxLength='200'
                  autoFocus
                />
              </div>
              <BtnForm
                text='Buscar'
              />
            </form>
            {errorSearchOffers.error && (
              <p className='text-[var(--color-error)] font-semibold'>
                {errorSearchOffers.text}
              </p>
            )}
          </div>
        </div>
      </section>
    </header>
  )
}
