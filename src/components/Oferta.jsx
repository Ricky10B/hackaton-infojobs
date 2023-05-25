import { IMAGE_COMPANY_DEFAULT } from '../consts'
import { AvisoOffer } from './AvisoOffer'
import { FechaPublicacionOferta } from './FechaPublicacionOferta'
import { InfoCard } from './InfoCard'

export const Oferta = ({ oferta, showModalOffer }) => {
  const imagenEmpresa = oferta?.author?.logoUrl ?? IMAGE_COMPANY_DEFAULT

  return (
    <li
      className='bg-[var(--bg-item-offer)] flex flex-col gap-5 p-3 rounded-lg shadow-lg cursor-pointer hover:bg-[var(--bg-item-offer-hover)]'
      onClick={() => showModalOffer(oferta.id, true)}
    >
      <header className='flex gap-4'>
        <picture className='max-w-[4rem] w-full max-h-[4em] h-full'>
          <img
            src={imagenEmpresa}
            alt={`Logo de la empresa ${oferta.author.name}`}
            className='w-full min-w-[4em] h-full min-h-[4em] block object-cover rounded-lg'
          />
        </picture>

        <div>
          {oferta.bold && (
            <AvisoOffer
              text='Destacado'
              customStyles='bg-[var(--bg-bold-offer)]'
            />
          )}
          <h2 className='font-semibold text-[var(--color-titulo-oferta)] titleOffer'>
            {oferta.title}
          </h2>
          <a
            href={oferta.author.uri}
            className='text-[var(--enlace-empresa-oferta)] hover:text-[var(--enlace-empresa-oferta-hover)] hover:underline'
            target='_blank'
            rel='noreferrer'
            onClick={e => e.stopPropagation()}
          >
            {oferta.author.name}
          </a>
          <ul className='flex flex-col-reverse md:flex-row md:gap-2 text-[var(--color-detalles-oferta)]'>
            <InfoCard
              content={oferta.teleworking.value}
            />
            <InfoCard
              content='|'
              customStyles='hidden md:block'
            />
            <InfoCard
              content={oferta.province.value}
            />
            <InfoCard
              content='|'
              customStyles='hidden md:block'
            />
            <FechaPublicacionOferta
              published={oferta.published}
              updated={oferta.updated}
              customStyles='text-sm mt-1'
            />
          </ul>
        </div>

      </header>
      <div className='hidden md:block'>
        <article className='hidden md:block'>
          <p className='descriptionOffer text-[var(--color-detalles-oferta)]'>
            {oferta.requirementMin}
          </p>
        </article>

        <ul className='flex gap-2 justify-end md:mt-3 text-[var(--color-detalles-oferta)]'>
          <InfoCard
            content={`Contrato ${oferta.contractType.value}`}
          />
          <InfoCard
            content='|'
          />
          <InfoCard
            content={`Jornada ${oferta.workDay.value}`}
          />
          <InfoCard
            content='|'
          />
          <InfoCard
            content={oferta.salaryDescription}
          />
        </ul>
      </div>
    </li>
  )
}
