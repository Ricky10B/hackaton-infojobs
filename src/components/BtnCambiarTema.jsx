import { IconoDarkMode, IconoLightMode } from './LogosInfojobs'

export const BtnCambiarTema = () => {
  const changeTheme = (e) => {
    const { checked } = e.target
    document.documentElement.className = checked ? 'dark' : 'light'
  }

  return (
    <div className='flex'>
      <input
        type='checkbox'
        className='invisible absolute right-0'
        id='inputChangeTheme'
        onClick={changeTheme}
      />
      <label
        htmlFor='inputChangeTheme'
        className='relative w-max sm:w-[70px] h-9 rounded-full flex items-center justify-center sm:justify-start border-4 border-solid border-transparent cursor-pointer bg-origin-border bg-transparent colorBordeCambiarTema'
      >
        <div className='cuadro hidden sm:block absolute inset-0 bg-[var(--bg-fondo-cambiar-tema)] rounded-full' />
        <div className='w-10 h-10 rounded-full -ml-3 z-10 circleChangeMode' />
        <span className='absolute -left-[14%] sm:-left-[7%] z-10 text-black'>
          <IconoLightMode />
        </span>
        <span className='absolute right-[30%] sm:-right-[14%] z-10 text-black'>
          <IconoDarkMode />
        </span>
      </label>
    </div>
  )
}
