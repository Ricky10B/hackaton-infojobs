import { LogoInfojobs } from './LogosInfojobs'

export const LoaderInfojobs = () => {
  return (
    <div className='fixed inset-0 bg-[rgba(0,0,0,.8)] backdrop-blur-sm z-[100] grid place-content-center'>
      <span className='loaderInfojobs'>
        <LogoInfojobs />
      </span>
    </div>
  )
}
