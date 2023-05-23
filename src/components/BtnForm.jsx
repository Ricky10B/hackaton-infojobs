export const BtnForm = ({ text }) => {
  return (
    <div className='w-full sm:w-max'>
      <input
        type='submit'
        value={text}
        className='bg-[#fa4c18] px-2 py-1 rounded-md outline-none border border-[#f24a17] font-bold text-white cursor-pointer tracking-wider hover:bg-[#d24216] w-full sm:w-max'
      />
    </div>
  )
}
