import { IconoEquis, LogoInfojobs } from './LogosInfojobs'

export const ModalUser = ({ showModal, toggleModalInsertUsername }) => {
  return (
    <section className={`${showModal ? 'fixed' : 'hidden'} grid place-content-center inset-0 backdrop-blur-md z-50 transition-`}>
      <div className='bg-[#ececec] rounded-lg max-w-xl flex flex-col mx-4 shadow-2xl'>
        <div className='bg-white flex justify-between pt-2 px-6 rounded-t-lg'>
          <span>
            <LogoInfojobs />
          </span>
          <span
            className='text-[#2088c2] cursor-pointer p-1 mb-1 rounded-full hover:bg-gray-200'
            onClick={() => toggleModalInsertUsername(null, false)}
          >
            <IconoEquis strokeWidth='2' />
          </span>
        </div>
        <div className='pt-2 pb-4 px-6 flex flex-col gap-4'>
          <p className='text-gray-600'>Puedes proporcionar tu nombre de usuario de Github para recomendarte empleos que se basan en las tecnologías que más usas para que puedas encontrar las mejores ofertas para tí.</p>
          <form className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
              <label className='text-gray-600'>Nombre de usuario de Github</label>
              <input
                type='text'
                placeholder='Ricky10B, midudev, ...'
                className='outline-none w-full rounded-md py-1 px-2 border border-transparent focus:shadow-[0_0_15px_rgba(0,0,0,.4)]'
              />
            </div>
            <div className='flex flex-col sm:flex-row justify-end gap-2 [&>button]:w-full [&>button]:md:w-max'>
              {/* e00d0d */}
              <button
                className='bg-[#ff4040] py-2 px-10 text-gray-100 rounded-lg font-bold hover:bg-[#e53b3b]'
                onClick={(e) => toggleModalInsertUsername(e, false)}
              >Ahora no
              </button>
              <button
                className='bg-blue-800 py-2 px-10 text-gray-100 rounded-lg cursor-pointer font-bold hover:bg-[#153290]'
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
