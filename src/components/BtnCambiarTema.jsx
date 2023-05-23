import { IconoDarkMode, IconoLightMode } from './LogosInfojobs'

export const BtnCambiarTema = () => {
  return (
    <div className='flex'>
      <input type='checkbox' className='invisible absolute right-0' id='inputChangeTheme' />
      <label
        htmlFor='inputChangeTheme'
        className='relative w-max sm:w-[70px] h-9 rounded-full flex items-center justify-center sm:justify-start border-4 border-solid border-transparent cursor-pointer bg-origin-border bg-transparent sm:bg-[linear-gradient(135deg,_#67efe8_45%,_#0d63da_55%)]'
      >
        <div className='cuadro hidden sm:block absolute inset-0 bg-[#f5f5f5] rounded-full' />
        <div className='w-10 h-10 rounded-full -ml-3 z-10 transition-transform circleChangeMode' />
        <span className='absolute -left-[14%] sm:-left-[7%] z-10'>
          <IconoLightMode />
        </span>
        <span className='absolute right-[30%] sm:-right-[14%] z-10'>
          <IconoDarkMode />
        </span>
      </label>
    </div>
  )
}
