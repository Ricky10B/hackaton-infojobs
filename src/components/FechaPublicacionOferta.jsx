import { getDatePublished } from '../utils/getDatePublished'
import { AvisoOffer } from './AvisoOffer'

export const FechaPublicacionOferta = ({
  published,
  updated,
  customStyles
}) => {
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
    <li className={`${customStyles} tracking-wider`}>
      <span className={nueva || update ? 'text-[var(--bg-new-offer)] font-medium mr-1' : ''}>
        <span className='hidden sm:inline'>Publicado </span>
        hace {timePublished}
      </span>

      {nueva && (
        <AvisoOffer text='Nueva' customStyles='bg-[var(--bg-new-offer)]' />
      )}

      {update && <span>(Publicada de nuevo)</span>}
    </li>
  )
}
