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
    value: 'page=1'
  },
  sortOffers: {
    key: 'order',
    value: 'order=relevancia-desc',
    title: 'Ordenar ofertas',
    nameInput: 'sortOffers',
    typeInput: 'radio',
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
    title: 'Fecha',
    nameInput: 'dateOffer',
    typeInput: 'radio',
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
    title: 'Modalidad',
    nameInput: 'modality',
    typeInput: 'checkbox',
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
    title: 'Categoría del puesto',
    nameInput: 'categoryOffer',
    typeInput: 'checkbox',
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
  },
  contractType: {
    key: 'contractType',
    value: '',
    title: 'Tipo de contrato',
    nameInput: 'contractType',
    typeInput: 'checkbox',
    dataFilters: [
      {
        text: 'Indefinido',
        value: 'indefinido',
        isChecked: false
      },
      {
        text: 'Otros contratos',
        value: 'otros-contratos',
        isChecked: false
      },
      {
        text: 'De duración determinada',
        value: 'de-duracion-determinada',
        isChecked: false
      },
      {
        text: 'Formativo',
        value: 'formativo',
        isChecked: false
      },
      {
        text: 'Fijo discontinuo',
        value: 'fijo-discontinuo',
        isChecked: false
      },
      {
        text: 'Autónomo',
        value: 'autonomo',
        isChecked: false
      }
    ]
  },
  workDay: {
    key: 'workday',
    value: '',
    title: 'Jornada laboral',
    nameInput: 'workDay',
    typeInput: 'checkbox',
    dataFilters: [
      {
        text: 'Completa',
        value: 'completa',
        isChecked: false
      },
      {
        text: 'Indiferente',
        value: 'indiferente',
        isChecked: false
      },
      {
        text: 'Intensiva - Mañana',
        value: 'intensiva-manana',
        isChecked: false
      },
      {
        text: 'Parcial - Mañana',
        value: 'parcial-manana',
        isChecked: false
      },
      {
        text: 'Parcial - Indiferente',
        value: 'parcial-indiferente',
        isChecked: false
      }
    ]
  }
}
