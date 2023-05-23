import { BtnCambiarTema } from './BtnCambiarTema'
import { BtnForm } from './BtnForm'
import { LogoInfojobs } from './LogosInfojobs'

export const HeaderPrincipal = ({ toggleModalInsertUsername }) => {
  return (
    <header className='flex flex-col py-3 gap-2 mx-0 xl:mx-4 cabeceraPrincipal'>
      <div className='flex h-10 items-center justify-between mx-3 sm:mx-4'>
        <div className='flex'>
          <a href='https://www.infojobs.net/' target='_blank' rel='noreferrer'>
            <LogoInfojobs />
          </a>
        </div>
        <div className='flex items-center gap-3 sm:gap-5'>
          <div>
            <button
              className='border-2 border-[#2088c2] text-[#2088c2] rounded-lg p-[3px] sm:py-1 sm:px-2 font-bold shadow-lg backdrop-blur-md hover:opacity-70 whitespace-nowrap'
              onClick={() => toggleModalInsertUsername(null, true)}
            >Sin usuario
            </button>
          </div>
          <BtnCambiarTema />
        </div>
      </div>
      <section className='my-1'>
        <div className='flex justify-center items-center'>
          <div className='bg-[#2088c2b3] rounded-md py-3 px-4 sm:py-6 w-[95%] sm:w-3/4 bg-opacity-60'>
            <form className='flex flex-col sm:flex-row items-start justify-center gap-1 sm:items-end sm:gap-3'>
              <div className='w-full sm:w-[85%]'>
                <label htmlFor='searchOffer' className='text-white'>Busco ofertas de...</label>
                <input id='searchOffer' placeholder='Puesto, empresa o palabra clave' className='w-full px-2 py-1 rounded-md outline-none border border-transparent focus:border-[#2088c2]' />
              </div>
              <BtnForm
                text='Buscar'
              />
            </form>
          </div>
        </div>
      </section>
    </header>
  )
}
