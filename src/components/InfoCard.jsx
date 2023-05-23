export const InfoCard = ({ content, customStyles }) => {
  return (
    <li>
      <small className={customStyles}>
        {content}
      </small>
    </li>
  )
}
