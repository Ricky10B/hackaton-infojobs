export const BotonPaginacion = ({ children }) => {
  return (
    <button className='text-[#2088c2] flex items-center rounded-lg font-semibold py-[7px] px-[11px] md:py-3 md:px-4 text-sm md:text-base hover:bg-[var(--hover-botones)]'>
      {children}
    </button>
  )
}
