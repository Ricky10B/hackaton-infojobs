export const AvisoOffer = ({ text, customStyles }) => {
  return (
    <span className={`text-[var(--color-text-aviso)] py-[1px] px-[9px] rounded-[5px] font-semibold text-[0.8rem] ${customStyles}`}>
      {text}
    </span>
  )
}
