import { IconoEquis } from './LogosInfojobs'
import { FechaPublicacionOferta } from './FechaPublicacionOferta'
import offer from '../../public/offer.json'

export const ModalOffer = ({ ofertaId, showModalOffer }) => {
  // const [offer, setOffer] = useState({})
  // useEffect(() => {
  //   obtenerOferta(ofertaId)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.error(err)
  //       throw new Error('No se pudo obtener la oferta')
  //     })
  // }, [ofertaId])

  return (
    <div className='fixed inset-0 backdrop-blur grid place-content-center z-50'>
      <div className='flex flex-col gap-3 m-4 rounded-2xl shadow-[0_0_17px_rgba(0,0,0,.5)] bg-white max-w-7xl w-[95%] sm:w-10/12 lg:w-[75%] xl:w-[70%] h-[95%] mx-auto overflow-auto contenidoConScroll'>
        <header className='flex flex-col gap-5 px-5 py-4 relative  sm:sticky sm:top-0 sm:bg-[#dbfbff] pb-1 sm:pb-2 sm:border-b sm:border-b-solid sm:border-b-[rgba(0,0,0,.4)]'>
          <span
            className='fixed sm:absolute top-[3%] sm:top-[1%] right-[5%] sm:right-[1%] text-[#2088c2] cursor-pointer p-1 mb-1 rounded-full hover:bg-gray-200'
            onClick={() => showModalOffer(offer, false)}
          >
            <IconoEquis strokeWidth='4' />
          </span>
          <div className='flex flex-col sm:grid sm:grid-cols-[minmax(6em,8em)_1fr] items-center gap-3'>
            <picture className='rounded-full shadow-[0_1px_7px_rgba(0,0,0,.6)]'>
              <img
                src={`${offer.profile.logoUrl}`}
                alt='Logo de la empresa'
                className='w-[100px] sm:w-full h-[100px] sm:h-full block rounded-full'
              />
            </picture>
            <div>
              <h2 className='text-lg font-semibold'>{offer.title}</h2>
              <ul className='flex flex-col gap-0'>
                <li>
                  <a
                    href={offer.profile.corporateWebsiteUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='text-blue-600 hover:text-blue-700 hover:underline'
                  >{offer.profile.name}
                  </a>
                </li>
                {offer.exactLocation &&
                  <li>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${offer.latitude},${offer.longitude}&zoom=20`}
                      target='_blank'
                      rel='noreferrer'
                      className='text-blue-600 hover:text-blue-700 hover:underline'
                    >Ubicación de la empresa
                    </a>
                  </li>}
                <li>
                  <span>Número de trabajadores: {offer.profile.numberWorkers}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between'>
            <div className='flex flex-col gap-1 md:gap-3 md:flex-row sm:justify-between'>
              <ul className='[list-style:inside] [&>li]:text-sm flex flex-col gap-1'>
                <li className='text-gray-950'>
                  <span>{offer.city} {offer.province.value} {offer.country.value}</span>
                </li>
                <FechaPublicacionOferta
                  published={offer.creationDate}
                  updated={offer.updateDate}
                  colorTextItem='text-gray-950'
                />
                <li className='text-gray-950'>
                  <span>Salario {offer?.salaryDescription ?? 'no disponible'}</span>
                </li>
              </ul>
              <ul className='[list-style:inside] [&>li]:text-sm flex flex-col gap-1'>
                <li>
                  <span>Experiencia mínima: {offer.experienceMin.value}</span>
                </li>
                <li>
                  <span>Tipo de contrato: {offer.contractType.value}</span>
                </li>
              </ul>
            </div>
            <div className='flex flex-col-reverse w-8/12 sm:w-9/12 sm:flex-col [&>span]:text-sm'>
              <a
                href={offer.link}
                target='_blank'
                rel='noreferrer'
                className='bg-[#fa4c18] px-4 py-2 rounded-lg font-semibold text-white uppercase whitespace-nowrap w-max'
              >Inscribirme en esta oferta
              </a>
              <span className='w-8/12 sm:w-9/12 lg:w-7/12'>Nuestro consejo: inscríbete si tienes el perfil, puede que se ajuste más que el de otros inscritos.</span>
            </div>
          </div>
        </header>

        <section className='flex flex-col gap-4 px-5 pb-4'>
          <h3 className='font-semibold text-xl'>Requisitos</h3>

          <div className='flex flex-col gap-[6px] sm:flex-row sm:gap-16 [&>div]:flex [&>div]:flex-col [&>div]:gap-[6px]'>
            <div>
              <div>
                <h5 className='font-semibold'>Estudios mínimos</h5>
                <p>{offer.studiesMin.value || 'No disponible'}</p>
              </div>
              <div>
                <h5 className='font-semibold'>Experiencia mínima</h5>
                <p>{offer.experienceMin.value || 'No disponible'}</p>
              </div>

              <div>
                <h5 className='font-semibold'>Tipo de industria de la oferta</h5>
                <p>{offer.profile.typeIndustry.value || 'No disponible'}</p>
              </div>
              <div>
                <h5 className='font-semibold'>Categoría</h5>
                <p>{offer.category.value || 'No disponible'}</p>
              </div>

              <div>
                <h5 className='font-semibold'>Salario</h5>
                <p>{offer.salaryDescription || 'No disponible'}</p>
              </div>
            </div>

            <div>
              <div>
                <h5 className='font-semibold'>Nivel del puesto</h5>
                <p>{offer.jobLevel.value || 'No disponible'}</p>
              </div>

              <div>
                <h5 className='font-semibold'>Personal a cargo</h5>
                <p>{offer.staffInCharge.value || 'No disponible'}</p>
              </div>
              <div>
                <h5 className='font-semibold'>Número de vacantes</h5>
                <p>{offer.vacancies || 'No disponible'}</p>
              </div>

              <div>
                <h5 className='font-semibold'>Duracion del contrato</h5>
                <p>{offer.contractDuration || 'No disponible'}</p>
              </div>
            </div>

            <div />
          </div>

          <div>
            <h5 className='font-semibold'>Conocimientos necesarios</h5>
            <ul className='flex flex-wrap w-9/12 gap-2'>
              {offer.skillsList.map(skill => (
                <li key={skill.skill}>
                  <span className='bg-blue-200 py-1 px-2 text-center text-sm rounded-lg'>{skill.skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className='font-semibold'>Requisitos mínimos</h5>
            <ul>
              {offer.minRequirements
                .split('\n')
                .concat(
                  offer.description.split('\n').filter(text => text !== '')
                    .map((requirement, i) => (
                      <li key={i}>
                        {requirement.endsWith(':') && <br />}
                        <p>{requirement}</p>
                        {requirement.endsWith(':') && <br />}
                      </li>
                    )
                    ))}
            </ul>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-black font-semibold'>Descripción</h3>
            <p>{offer.profile.description}</p>
          </div>
        </section>
      </div>
    </div>
  )
}
