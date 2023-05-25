export const BtnForm = ({ text }) => {
  return (
    <div className='w-full sm:w-max'>
      <input
        type='submit'
        value={text}
        className='bg-[var(--bg-boton-enviar-formulario)] px-2 py-1 rounded-md outline-none border border-[var(--bg-boton-enviar-formulario)] font-bold text-white cursor-pointer tracking-wider hover:bg-[var(--bg-boton-enviar-formulario-hover)] w-full sm:w-max'
      />
    </div>
  )
}
