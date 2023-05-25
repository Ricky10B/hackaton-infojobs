import { IconoEquis } from './LogosInfojobs'

export const BtnCerrarModal = ({ clickedModalUser, customStyles }) => {
  return (
    <span
      className={`text-[var(--color-logo-infojobs)] cursor-pointer p-1 mb-1 rounded-full hover:bg-[var(--hover-botones)] ${customStyles}`}
      onClick={clickedModalUser}
    >
      <IconoEquis strokeWidth='4' />
    </span>
  )
}
