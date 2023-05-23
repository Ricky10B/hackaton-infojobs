export const ItemFiltro = ({ typeInput, nameInput, contentLabel }) => {
  return (
    <li>
      <label className='flex gap-1 items-start'>
        <input type={typeInput} name={nameInput} className='mt-1' />
        <p className='text-sm text-gray-800'>{contentLabel}</p>
      </label>
    </li>
  )
}
