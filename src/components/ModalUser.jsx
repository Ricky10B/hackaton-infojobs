import { useState } from 'react'
import { LogoInfojobs } from './LogosInfojobs'
import { useAppSelector } from '../hooks/useStore'
import { BtnCerrarModal } from './BtnCerrarModal'
import { useUserActions } from '../hooks/useUserActions'
import { useModalActions } from '../hooks/useModalActions'

export const ModalUser = () => {
  const usernameGithub = useAppSelector(state => state.userSlice.usernameGithub)
  const modalUser = useAppSelector(state => state.modalsSlice.modalUser)
  const { toggleModals } = useModalActions()
  const { changeUserGithub } = useUserActions()

  const [userGithubModal, setUserGithubModal] = useState(usernameGithub)

  const handleModalUserGithub = (showModal) => {
    toggleModals({ type: 'user', showModal })
  }

  const handleChangeUserGithub = (e) => {
    const { value } = e.target
    setUserGithubModal(value)
  }

  const handleSubmitUserGithub = (e) => {
    e.preventDefault()
    changeUserGithub(userGithubModal)
    handleModalUserGithub(false)
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
                className='outline-none w-full rounded-md py-1 px-2 border border-transparent focus:shadow-[0_0_15px_rgba(0,0,0,.4)]'
              />
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
