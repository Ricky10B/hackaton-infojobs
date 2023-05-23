import { IMAGE_COMPANY_DEFAULT } from '../consts'
import { FechaPublicacionOferta } from './FechaPublicacionOferta'
import { InfoCard } from './InfoCard'

export const Oferta = ({ oferta, showModalOffer }) => {
  const imagenEmpresa = oferta?.author?.logoUrl ?? IMAGE_COMPANY_DEFAULT

  return (
    <li
      className='bg-white flex flex-col gap-5 p-3 rounded-lg shadow-lg cursor-pointer hover:bg-blue-100'
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
          <h2 className='font-semibold text-[#292e31] titleOffer'>
            {oferta.title}
          </h2>
          <a
            href={oferta.author.uri}
            className='text-blue-800 hover:underline'
            target='_blank'
            rel='noreferrer'
            onClick={e => e.stopPropagation()}
          >
            {oferta.author.name}
          </a>
          <ul className='flex flex-col md:flex-row md:gap-2'>
            <InfoCard
              content={oferta.teleworking.value}
              customStyles='text-gray-500'
            />
            <InfoCard
              content='|'
              customStyles='text-gray-500 hidden md:block'
            />
            <InfoCard
              content={oferta.province.value}
              customStyles='text-gray-500'
            />
            <InfoCard
              content='|'
              customStyles='text-gray-500 hidden md:block'
            />
            <FechaPublicacionOferta
              published={oferta.published}
              updated={oferta.updated}
              customStyles='text-gray-500 text-sm mt-1'
            />
          </ul>
        </div>

      </header>
      <div className='hidden md:block'>
        <article className='hidden md:block'>
          <p className='descriptionOffer text-gray-500'>
            {oferta.requirementMin}
          </p>
        </article>

        <ul className='flex gap-2 justify-end md:mt-3'>
          <InfoCard
            content={`Contrato ${oferta.contractType.value}`}
            customStyles='text-gray-500'
          />
          <InfoCard
            content='|'
            customStyles='text-gray-500'
          />
          <InfoCard
            content={`Jornada ${oferta.workDay.value}`}
            customStyles='text-gray-500'
          />
          <InfoCard
            content='|'
            customStyles='text-gray-500'
          />
          <InfoCard
            content={oferta.salaryDescription}
            customStyles='text-gray-500'
          />
        </ul>
      </div>
    </li>
  )
}
