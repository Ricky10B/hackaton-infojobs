let pageForDefault = new URLSearchParams(window.location.search).get('page')
pageForDefault = pageForDefault === 'undefined' || Number(pageForDefault) < 1 ? '1' : pageForDefault

export const IMAGE_COMPANY_DEFAULT = 'https://components.infojobs.com/statics/images/pic-company-logo.png'

export const initialStateUser = {
  usernameGithub: '',
  themeApp: 'light',
  error: ''
}

export const initialStateModals = {
  modalUser: true,
  modalFilter: false
}

export const initialStateOffers = {
  listOffers: [],
  currentPage: 0,
  totalResults: 0,
  totalPages: 0,
  queryParameters: {}
}

export const initialStateFilters = {
  query: {
    key: 'q',
    value: ''
  },
  pages: {
    key: 'page',
    value: `page=${pageForDefault}`
  },
  sortOffers: {
    key: 'order',
    value: 'order=relevancia-desc',
    dataFilters: [
      {
        text: 'Fecha de publicación',
        value: 'updated-desc',
        isChecked: false
      },
      {
        text: 'Relevancia',
        value: 'relevancia-desc',
        isChecked: true
      }
    ]
  },
  dateOffer: {
    key: 'sinceDate',
    value: 'sinceDate=ANY',
    dataFilters: [
      {
        text: 'Cualquier fecha',
        value: 'ANY',
        isChecked: true
      },
      {
        text: 'Últimas 24 Horas',
        value: '_24_HOURS',
        isChecked: false
      },
      {
        text: 'Últimas 7 Días',
        value: '_7_DAYS',
        isChecked: false
      },
      {
        text: 'Últimas 15 Días',
        value: '_15_DAYS',
        isChecked: false
      }
    ]
  },
  modality: {
    key: 'teleworking',
    value: '',
    dataFilters: [
      {
        text: 'Híbrido',
        value: 'teletrabajo-posible',
        isChecked: false
      },
      {
        text: 'Remoto',
        value: 'solo-teletrabajo',
        isChecked: false
      },
      {
        text: 'Presencial',
        value: 'trabajo-solo-presencial',
        isChecked: false
      },
      {
        text: 'Sin especificar',
        value: 'no-se-sabe-no-esta-decidido',
        isChecked: false
      }
    ]
  },
  categoryOffer: {
    key: 'category',
    value: '',
    dataFilters: [
      {
        text: 'Administración de empresas',
        value: 'administracion-empresas',
        isChecked: false
      },
      {
        text: 'Administración Pública',
        value: 'administracion-publica',
        isChecked: false
      },
      {
        text: 'Calidad, producción e I+D',
        value: 'calidad-produccion-id',
        isChecked: false
      },
      {
        text: 'Compras, logística y almacén',
        value: 'compras-logistica-almacen',
        isChecked: false
      },
      {
        text: 'Diseño y artes gráficas',
        value: 'diseno-artes-graficas',
        isChecked: false
      },
      {
        text: 'Finanzas y banca',
        value: 'finanzas-banca',
        isChecked: false
      },
      {
        text: 'Informática y telecomunicaciones',
        value: 'informatica-telecomunicaciones',
        isChecked: false
      }
    ]
  }
}
