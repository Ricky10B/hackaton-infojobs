import { useState } from 'react'
import { LogoInfojobs } from './LogosInfojobs'
import { useAppSelector } from '../hooks/useStore'
import { BtnCerrarModal } from './BtnCerrarModal'
import { useUserActions } from '../hooks/useUserActions'
import { useModalActions } from '../hooks/useModalActions'
import { useOffersAction } from '../hooks/useOffersActions'
import { obtenerRepoUsuarioGithub } from '../services/obtenerRepoUsuarioGithub'
import { obtenerLenguajeMasUsado } from '../utils/obtenerLenguajeMasUsado'
import { getOffersWithParams } from '../utils/getOffersWithParams'
import { useLoaderAction } from '../hooks/useLoaderAction'
import { useFiltersAction } from '../hooks/useFiltersAction'

export const ModalUser = () => {
  const usernameGithub = useAppSelector(state => state.userSlice.usernameGithub)
  const modalUser = useAppSelector(state => state.modalsSlice.modalUser)
  const filtersOffers = useAppSelector(state => state.filtersSlice)
  const listOffers = useAppSelector(state => state.offersSlice.listOffers)
  const [userGithubModal, setUserGithubModal] = useState(usernameGithub)
  const [errorGetUserGithub, setErrorGetUserGithub] = useState({
    error: false,
    text: ''
  })

  const { toggleModals } = useModalActions()
  const { changeUserGithub } = useUserActions()
  const { handleSetOffers } = useOffersAction()
  const { setLoaderSlice } = useLoaderAction()
  const { handleQueryParam } = useFiltersAction()

  const handleModalUserGithub = (showModal) => {
    toggleModals('modalUser', showModal)
    // Trae ofertas cuando el usuario no ingresó
    // un nombre de usuario de github y no habían ofertas
    // anteriores para momstrarle
    if (!listOffers?.length) {
      setLoaderSlice(true)
      getOffersWithParams(filtersOffers)
        .then(resOffers => {
          handleSetOffers(resOffers)
        })
        .catch(err => {
          console.error(err)
          setErrorGetUserGithub({
            error: true,
            text: 'Ocurrió un error al obtener las ofertas'
          })
        })
        .finally(() => {
          setLoaderSlice(false)
        })
    }
  }

  const handleChangeUserGithub = (e) => {
    const { value } = e.target

    if (value.trim() !== '' && errorGetUserGithub.error) {
      setErrorGetUserGithub({
        error: false,
        text: ''
      })
    }

    setUserGithubModal(value)
  }

  const languageOfUserGithub = async (userGithubModal) => {
    const reposUsuarioGithub = await obtenerRepoUsuarioGithub({ usernameGithub: userGithubModal })

    // Si ocurrió algún problema obteniendo los repositorios
    // no se traen las ofertas
    if (reposUsuarioGithub === false) return false

    const lenguajeMasUsado = obtenerLenguajeMasUsado(reposUsuarioGithub)
    return lenguajeMasUsado[0]
  }

  const handleSubmitUserGithub = (e) => {
    e.preventDefault()

    if (userGithubModal.trim() === '') {
      return setErrorGetUserGithub({
        error: true,
        text: 'El nombre de usuario no puede estar vacío'
      })
    }

    setLoaderSlice(true)
    languageOfUserGithub(userGithubModal)
      .then(languageOfUser => {
        if (!languageOfUser) {
          return setErrorGetUserGithub({
            error: true,
            text: 'No se encontró el usuario de Github'
          })
        }

        // Se encontró el usuario de Github
        changeUserGithub(userGithubModal)
        handleQueryParam(languageOfUser)
        toggleModals('modalUser', false)
      })
      .catch(err => {
        console.error(err)
        setLoaderSlice(false)
        setErrorGetUserGithub({
          error: true,
          text: 'Ocurrió un error al obtener el usuario de github'
        })
      })
  }

  return (
    <section className={`${modalUser ? 'fixed' : 'hidden'} grid place-content-center inset-0 backdrop-blur-md z-50 transition-`}>
      <div className='bg-[var(--bg-modal-user)] rounded-lg max-w-xl flex flex-col mx-4 shadow-[0_0_25px_#000]'>
        <div className='bg-[var(--bg-header-modal-user)] flex justify-between pt-2 px-6 rounded-t-lg'>
          <span>
            <LogoInfojobs />
          </span>
          <BtnCerrarModal
            clickedModalUser={() => handleModalUserGithub(false)}
            customStyles='p-1'
          />
        </div>
        <div className='pt-2 pb-4 px-6 flex flex-col gap-4 rounded-b-lg'>
          <p className='text-[var(--color-text-modal-user)]'>Puedes proporcionar tu nombre de usuario de Github para recomendarte empleos que se basan en las tecnologías que más usas para que puedas encontrar las mejores ofertas para tí.</p>

          <form
            className='flex flex-col gap-2'
            onSubmit={handleSubmitUserGithub}
          >
            <div className='flex flex-col gap-1'>
              <label htmlFor='userGithub' className='text-[var(--color-text-modal-user)]'>
                Nombre de usuario de Github
              </label>
              <input
                id='userGithub'
                type='text'
                placeholder='Ricky10B, midudev, ...'
                value={userGithubModal}
                onChange={handleChangeUserGithub}
                className={`outline-none w-full rounded-md py-1 px-2 border focus:shadow-[0_0_15px_rgba(0,0,0,.4)] focus:border-transparent ${errorGetUserGithub.error ? 'border-[var(--color-error)]' : 'border-transparent'}`}
                maxLength='80'
                autoComplete='off'
                autoFocus
              />
              {errorGetUserGithub.error && (
                <p className='font-semibold text-[var(--color-error)]'>
                  {errorGetUserGithub.text}
                </p>
              )}
            </div>

            <div className='flex flex-col sm:flex-row justify-end gap-2'>
              <button
                type='button'
                className='bg-[var(--bg-boton-enviar-formulario)] py-2 px-10 text-gray-100 rounded-lg font-bold hover:bg-[var(--bg-boton-enviar-formulario-hover)] whitespace-nowrap w-full md:w-max'
                onClick={() => handleModalUserGithub(false)}
              >Ahora no
              </button>
              <input
                type='submit'
                value='Enviar'
                className='bg-[var(--boton-enviar-usuario-github)] py-2 px-10 text-gray-100 rounded-lg cursor-pointer font-bold hover:bg-[var(--boton-enviar-usuario-github-hover)] w-full md:w-max'
                onSubmit={handleSubmitUserGithub}
              />
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}
