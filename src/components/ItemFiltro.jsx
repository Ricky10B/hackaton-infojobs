export const ItemFiltro = ({
  typeInput,
  nameInput,
  contentLabel,
  checked,
  value,
  sortByModality
}) => {
  const handleSort = (e) => {
    const { value, checked } = e.target
    console.log(value)
    sortByModality(checked ? value : '')
  }

  return (
    <li>
      <label className='flex gap-1 items-start'>
        <input
          type={typeInput}
          name={nameInput}
          className='mt-1'
          checked={checked}
          value={value}
          onChange={handleSort}
        />
        <p className='text-sm text-[var(--color-texto-categorias)]'>{contentLabel}</p>
      </label>
    </li>
  )
}
