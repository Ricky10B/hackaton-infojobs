import { useState } from 'react'
import { ModalOffer } from './ModalOffer'
import { Pagination } from './Pagination'
import { Oferta } from './Oferta'
// import { obtenerOferta } from '../services/obtenerOferta'

export const ListarOfertas = ({ ofertas }) => {
  const [modalOffer, setModalOffer] = useState({
    showModal: false,
    offer: {}
  })

  const showModalOffer = (offer, showHide) => {
    setModalOffer({
      offer,
      showModal: showHide
    })
  }

  return (
    <section className='w-full'>
      {modalOffer.showModal &&
        <ModalOffer
          oferta={modalOffer.offer}
          showModalOffer={showModalOffer}
        />}
      <ul className='flex flex-col gap-2'>
        {ofertas?.items?.map(oferta => {
          return (
            <Oferta
              key={oferta.id}
              oferta={oferta}
              showModalOffer={showModalOffer}
            />
          )
        })}
      </ul>
      <Pagination
        ofertas={ofertas}
      />
    </section>
  )
}
