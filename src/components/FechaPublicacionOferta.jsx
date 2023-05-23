import { getDatePublished } from '../utils/getDatePublished'

export const FechaPublicacionOferta = ({ published, updated, customStyles }) => {
  const { timePublished } = getDatePublished(updated)
  let nueva = false
  let update = false
  let menosDe1Dia = false

  // Si la publicación de la oferta son de dias
  const sonDias = timePublished.includes('d')
  if (sonDias) {
    // Publicado hace menos de 1 dia
    if (Number(timePublished.split('d')[0]) <= 1) menosDe1Dia = true
  } else menosDe1Dia = true

  if (menosDe1Dia && published === updated) nueva = true
  else if (menosDe1Dia && published !== updated) update = true

  return (
    <li className={`${customStyles}`}>
      Publicado hace <span className={nueva || update ? 'text-[#00a550] font-medium' : ''}>{timePublished} </span>
      {nueva && <span className='bg-[#00a550] text-white py-[1px] px-[5px] rounded-[5px]'>Nueva</span>}
      {update && <span>(Publicada de nuevo)</span>}
    </li>
  )
}
