import { IconoDarkMode, IconoLightMode } from './LogosInfojobs'
import { useAppSelector } from '../hooks/useStore'
import { useEffect } from 'react'
import { useUserActions } from '../hooks/useUserActions'

export const BtnCambiarTema = () => {
  const themeApp = useAppSelector(state => state.userSlice.themeApp)
  const { changeTheme } = useUserActions()

  const handleChangeTheme = (e) => {
    const { checked } = e.target
    const themeApp = checked ? 'dark' : 'light'

    document.documentElement.className = themeApp
    changeTheme(themeApp)
  }

  useEffect(() => {
    handleChangeTheme({ target: { checked: themeApp === 'dark' } })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex'>
      <input
        type='checkbox'
        className='invisible absolute right-0'
        id='inputChangeTheme'
        onClick={handleChangeTheme}
        defaultChecked={themeApp === 'dark'}
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
