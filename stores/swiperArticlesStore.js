import { defineStore } from 'pinia'

export const useSwiperArticlesStore = defineStore('swiperArticlesStore ', {
  state: () => ({
    dataSwiper: [
      {
        years: 2019,
        heading: 'ST-elevation myocardial infarction, pulmonary embolism, and cerebral ischemic stroke in a patient with critically low levels of natural anticoagulants',
        authors: 'Reznik E.V., Shcherbakova E.S., Dzhobava E.M. и др.'
      },
      {
        years: 2018,
        heading: 'Вопросы безопасности применения Дротаверина в акушерской практике',
        authors: 'Джобава Э.М.'
      },
      {
        years: 2018,
        heading: 'Фетальное программирование. Акушерство и гинекология',
        authors: 'Джобава Э.М.'
      },
      {
        years: 2016,
        heading: 'Оксидативный стресс, дисфункция эндотелия, дисбаланс цитокинов, гонадотропный синергизм, или все о токофероле в практике врача',
        authors: 'Джобава Э.М.'
      },
      {
        years: 2016,
        heading: 'Прегравидарная подготовка как скрининг и рутинная практика. Международный опыт и клинические рекомендации',
        authors: 'Джобава Э.М.'
      },

      {
        years: 2014,
        heading: 'Результаты исследования распространенности дефицита магния у беременных. Акушерство и гинекология.',
        authors: 'Серов В.Н., Блинов Д.В., Зимовина У.В., Джобава Э.М.'
      },
      {
        years: 2013,
        heading: 'Гестационный сахарный диабет – болезнь популяции. Медикаментозная терапия угрозы прерывания беременности и углеводный обмен',
        authors: 'Джобава Э.М., Некрасова К.Р., Доброхотова Ю.Э. и др.'
      },
      {
        years: 2013,
        heading: 'Дисфункция эндотелия и система гемостаза в группах риска по развитию акушерской патологии. Системный подход к диагностике и терапии.',
        authors: 'Джобава Э.М., Блинов Д.В., Доброхотова Ю.Э. и др.'
      },
      {
        years: 2013,
        heading: 'Роль дефицита магния в патогенезе гестоза. Российский вестник акушера-гинеколога',
        authors: 'Кнышева И.Г., Джобава Э.М., Доброхотова Ю.Э.'
      }
    ]
  }),
  getters: {
    getIsOpen() {
      return this.isOpen
    }
  },
  actions: {
    setIsOpen() {
      this.isOpen = !this.isOpen
    }
  }
})