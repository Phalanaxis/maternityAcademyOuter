<template>
  <div class="webinars-list">
    <div v-for="(item, index) in dataWebinars" class="webinars-list__card" :class="{reverse: index % 2 !== 0}">
      <div class="webinars-list__card-wrapper-img" :class="`wrapperImg${index + 1}`">
        <img :src="item.img" alt="Вебинар">
      </div>
      <div class="webinars-list__card-wrapper-text">
        <p>{{ item.howBe }}</p>
        <h2>{{ item.heading }}</h2>
        <p class="how-can-help">{{ item.text }}</p>
        <elements-collapse-secondary class="collapse" title="Подробней" />
        <div class="wraper-price">
          <div>
            <p>СТОИМОСТЬ ПРОГРАММЫ</p>
            <p>{{ item.price }}</p>
          </div>
          <button>Купить программу</button>
        </div>
      </div>
      <section></section>
    </div>
  </div>
</template>

<script>
const dataWebinars = [
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg1.png',
    whoBe: 'запись вебинара + подробная методичка + доступ 3 месяца',
    heading: 'Вебинар «Подготовка к беременности. Универсальная подготовка»',
    price: '1.000 руб.',
    text: 'Вебинар поможет понять, какие обследования и анализы необходимы любой женщине, планирующей беременность, и сориентирует, на что необходимо обратить внимание при получении результатов.'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg2.png',
    whoBe: 'запись вебинара + подробная методичка + доступ 3 месяца',
    heading: 'Вебинар «Подготовка к беременности. Специализированная часть»',
    price: '2.500 руб.',
    text: 'Вебинар поможет понять, как влияют возраст и нюансы здоровья обоих партнеров на планирование и течение беременности, а также на тактику её ведения врачом.'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg3.png',
    whoBe: '2 запись вебинара + 2 подробная методичка + доступ 3 месяца',
    heading: 'Вебинар «Подготовка к беременности, 2 в 1»',
    price: '3.000 руб.',
    text: 'Полный курс подготовки к беременности, включает в себя \n — Вебинар «Подготовка к беременности, универсальная часть» \n — Вебинар «Подготовка к беременности, специализированная часть»'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg4.png',
    whoBe: 'запись вебинара + подробная методичка + доступ 3 месяца',
    heading: 'Вебинар «Анализы и обследования во время беременности»',
    price: '500 руб.',
    text: 'Вебинар поможет разобраться в необходимости назначаемых анализов, обследований и их результатах.'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg5.png',
    whoBe: 'запись вебинара + доступ 3 месяца',
    heading: 'Вебинар «Если долго не наступает беременность: инструкция по решению проблемы»',
    price: '1.500 руб.',
    text: 'Вебинар посвящен причинам и лечению бесплодия во всем его многообразии. Он поможет понять, какие этапы диагностики существуют, какие шаги можно предпринять самостоятельно для решения проблемы, а какие методы может порекомендовать врач.'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg6.png',
    whoBe: 'запись вебинара + доступ 3 месяца',
    heading: 'Вебинар «Что делать, если были потери беременности? Правильные шаги на пути к счастливому материнству»',
    price: '2.500 руб.',
    text: 'Вебинар поможет разобраться, что такое потеря беременности, почему это происходит и что важно в каждом случае. Любая самопроизвольная потеря беременности требует уточнения причины и внимания к ведению дальнейшей беременности.'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg7.png',
    whoBe: 'запись вебинара + доступ 3 месяца',
    heading: 'Вебинар «Углеводные нарушения во время беременности. Гестационный сахарный диабет»',
    price: '990 руб.',
    text: 'Вебинар поможет разобраться с диагнозом ГСД, факторами его возникновения, способами диагностики и коррекции состояния без применения лекарств. Гестационный диабет является временной патологией, которую важно вовремя выявить и держать под контролем для дальнейшего благополучия мамы и малыша.'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg8.png',
    whoBe: 'Запись вебинара + гайд + книга рецептов + доступ 3 месяца',
    heading: 'Пакет Вебинар «Гестационный сахарный диабет» + Гайд по питанию и книга рецептов',
    price: '1.500 руб.',
    text: 'Содержит всю информацию о ГСД, подробный гайд по питанию в беременность, который поможет разобраться с рационом, а также книгу рецептов, содержащую 70 рецептов сбалансированных блюд. \n \n Включает в себя: \n — Вебинар «Гестационный сахарный диабет» \n — Гайд по питанию + книга рецептов'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg9.png',
    whoBe: 'запись вебинара + доступ 3 месяца',
    heading: 'Вебинар «Контрацепция. Выбор метода, обследование, сопровождение»',
    price: '4.000 руб.',
    text: 'Вебинар поможет разобраться в методах контрацепции, их принципах действия и специфике подбора в каждом отдельном случае. Современная контрацепция — это не только способ предохранения от нежелательной беременности, но и средство для поддержания репродуктивного здоровья.'
  }
]

  export default {

    setup () {

      return {
        dataWebinars
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    margin: 0;
  }

  h2 {
    margin: 0;
  }
  .webinars-list {
    width: 100%;
    margin: 150px 0 0 0;

    @media screen and (max-width: 1280px) {
      margin: 110px 0 0 0;
    }

    @media screen and (max-width: 1280px) {
      margin: 80px 0 0 0;
    }

    &__card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;
      position: relative;
      padding-bottom: 70px;
      margin-bottom: 70px;

      
      @media screen and (max-width: 1280px) {
        display: flex;
        flex-direction: column;

        &.reverse {
          flex-direction: column-reverse;
        }
      }
      

      &.reverse {
        div:first-child {
          order: 2;

          @media screen and (max-width: 1280px) {
            order: 1;
          }
        }
      }

      section {
        border-bottom: 1px solid rgba(197, 177, 178, 1);
        width: 100%;
        position: absolute;
        bottom: 0px;

        @media screen and (max-width: 1280px) {
          width: 100vw;
          margin-left: calc(50% - 50vw)
        }
      }

      section:last-child {
        border-bottom: none;
      }

      &-wrapper-img {
        position: relative;
        display: flex;
        justify-content: center;

        @media screen and (max-width: 680px) {
          width: 100%;
        }

        img {
          @media screen and (max-width: 1280px) {
            margin-left: 27px;
            width: 198px;
            height: 180px;
            margin-bottom: 60px;
          }

          @media screen and (max-width: 680px) {
            margin-left: 0;
            margin-bottom: 50px;
          }
        }
      }

      &-wrapper-text {
        display: flex;
        flex-direction: column;

        p:first-child {
          font-size: 14px;
          color: rgba(35, 35, 35, 1);
          text-transform: uppercase;
        }

        h2 {
          font-size: 26px;
          color: rgba(100, 76, 92, 1);
          line-height: 33px;

          @media screen and (max-width: 680px) {
            margin-top: 10px;
            font-size: 22px;
            line-height: 28px;
          }
        }

        .how-can-help {
          font-size: 16px;
          line-height: 24px;
          color: rgba(35, 35, 35, 1);
          margin-top: 20px;

          @media screen and (max-width: 680px) {
            font-size: 15px;
            line-height: 22px;
            margin-top: 15px;
          }
        }

        .collapse {
          border-bottom: 1px solid rgba(197, 177, 178, 1);
          margin-top: 40px;
        }

        .wraper-price {
          margin-top: 50px;
          display: flex;
          justify-content: space-between;

          @media screen and (max-width: 680px) {
            flex-direction: column;
            margin-top: 30px;
          }
          
          p:last-child {
            margin-top: 10px;
            font-family: Oswald;
            font-size: 22px;
            font-weight: 700;
            color: rgba(100, 76, 92, 1);
          }

          button {
            background: rgba(6, 72, 72, 1);
            border: none;
            color: white;
            padding: 18px 45px;
            font-size: 18px;
            outline: none;
            cursor: pointer;
            border-radius: 5px;

            @media screen and (max-width: 680px) {
              width: fit-content;
              margin-top: 30px;
            }
          }
        }
      }
    }
  }
</style>