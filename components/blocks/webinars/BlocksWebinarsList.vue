<template>
  <div @click.self="isOpenPopup = false" class="overlay__popup-webinars" :class="{active: isOpenPopup}">
    <div class="popup">
      <lazy-svg-close-popup class="close-popup" @click.native="isOpenPopup = false" />
      <div :class="{['mb-60']: i === 0}" v-if="dataWebinars[indexDataForPopup]?.idexMixPopup?.length" v-for="(item, i) in dataWebinars[indexDataForPopup].idexMixPopup">
        <h2>{{ dataWebinars[item]?.heading }}</h2>
        <p class="for-who">{{ dataWebinars[item]?.forWhoPopup }}</p>
        <h2>О чем поговорим?</h2>
        <p class="about-webinars" v-html="dataWebinars[item]?.aboutWebinarsPopup.split('—').map((el, i) => i !== 0 ? '<br> —' + el : null).join('')"></p>
      </div>
      <div v-else>
        <h2>{{ dataWebinars[indexDataForPopup].heading }}</h2>
        <p class="for-who">{{ dataWebinars[indexDataForPopup].forWhoPopup }}</p>
        <h2>О чем поговорим?</h2>
        <p class="about-webinars" v-html="dataWebinars[indexDataForPopup].aboutWebinarsPopup.split('—').map((el, i) => i !== 0 ? '<br> —' + el : null).join('')"></p>
        <div class="mb-60 mt-60" v-if="dataWebinars[indexDataForPopup].guideNutrition">
          <h2 class="mb-20">Гайд по питанию</h2>
          <p class="mb-40">{{ dataWebinars[indexDataForPopup].guideNutrition }}</p>
          <h2>О чем поговорим?</h2>
          <p v-html="dataWebinars[indexDataForPopup].forWhoPopupNuntrition.split('—').map((el, i) => i !== 0 ? '<br> —' + el : null).join('')"></p>
        </div>
        <div class="mb-60" v-if="dataWebinars[indexDataForPopup].booksRecipes">
          <h2 class="mb-40">Книга рецептов</h2>
          <p>В книге рецептов представлено более 70-ти рецептов разнообразного сбалансированного питания во время беременности, подобранного и составленного мною совместно с педиатром и врачом семейной медицины, включающие салаты, закуски, соусы, первые, вторые блюда, десерты, напитки, завтраки</p>
        </div>
      </div>
      <div class="block-author">
        <img src="~assets/images/avatarAuthor.png" alt="">
        <div>
          <p>Автор вебинара</p>
          <p>Профессор, доктор медицинских наук, специалист по трудным и сложным беременностям Джобава Элисо Мурмановна</p>
        </div>
      </div>
    </div>
  </div>
  <div class="webinars-list">
    <div v-for="(item, index) in dataWebinars" class="webinars-list__card">
      <div class="webinars-list__card-wrapper-img" :class="`wrapperImg${index + 1}`">
        <img v-if="index === 0" :src="item.img" alt="Вебинар">
        <template v-if="index === 0"><svg-gex class="icon icon1" /><svg-oval-icon class="icon icon2" /><svg-almost-circle class="icon icon3" /></template>
        <img v-if="index > 0 && width > 1280" :src="`/_nuxt/assets/images/webinars/${index}desk.png`" alt="Вебинар">
        <img v-if="index > 0 && width <= 1280 && width > 680" :src="`/_nuxt/assets/images/webinars/${index}tab.png`" alt="Вебинар">
        <img v-if="index > 0 && width <= 680" :src="`/_nuxt/assets/images/webinars/${index}mob.png`" alt="Вебинар">
      </div>
      <div class="webinars-list__card-wrapper-text">
        <p>{{ item.howBe }}</p>
        <h2>{{ item.heading }}</h2>
        <p v-html="item.text" class="how-can-help"></p>
        <elements-collapse-secondary @click.native="addIndex(index)" class="collapse" title="Подробней" />
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
    text: 'Вебинар поможет понять, какие обследования и анализы необходимы любой женщине, планирующей беременность, и сориентирует, на что необходимо обратить внимание при получении результатов.',
    forWhoPopup: 'Для женщин, планирующих беременность в течение ближайшего года',
    aboutWebinarsPopup: '— Какие анализы стоит сдать и каких специалистов посетить, если вы планируете стать мамой— Какой должна быть ежегодная диспансеризация у гинеколога и маммолога— Какие особенности подготовки и течения беременности могут возникнуть при заболеваниях молочных желез— Визит к гинекологу.  Чего ждать от осмотра, обследования и анализов. Как трактовать результаты обследования— Скрытые дефициты опасны для беременности, но не дают особых жалоб. Как выявить и скорректировать— Важные дефициты: белка, железа, витамина Д, магния, йода, фолиевой кислоты, омега-3— TORCH-инфекции при подготовке к беременности. Герпес-вирусы, ВЭБ, ЦМВ, корь, краснуха, токсоплазма, листериоз. Что делать, если результаты не радуют— Вопросы вакцинации перед беременностью. Что имеет смысл сделать— Как образ жизни влияет на зачатие. Сон, спорт, секс, питание и вес, питьевой режим, стресс, стул, вредные привычки'  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg2.png',
    whoBe: 'запись вебинара + подробная методичка + доступ 3 месяца',
    heading: 'Вебинар «Подготовка к беременности. Специализированная часть»',
    price: '2.500 руб.',
    text: 'Вебинар поможет понять, как влияют возраст и нюансы здоровья обоих партнеров на планирование и течение беременности, а также на тактику её ведения врачом.',
    forWhoPopup: 'Для женщин, планирующих беременность в течение ближайшего года, имеющих хронические заболевания или другие особенности здоровья',
    aboutWebinarsPopup: '— На что влияет возраст будущих родителей. Чем отличается подготовка к беременности после 30, 35 и 40 лет    — Как влияет семейный анамнез и течение беременностей по материнской линии на подготовку — Как быть с инсулинорезистентностью и нарушениями углеводного обмена. Разберем тромбофилии, хронические инфекции, дисфункцию митохондрий и оксидативный стресс, гормональные нарушения, а также нарушения микробиоты кишечника, функций ЖКТ и печени, дисплазию соединительной ткани и другие индивидуальные особенности — Чем отличается подготовка к беременности при гинекологических заболеваниях    — Чем отличается подготовка к беременности при при других хронических заболеваниях    — Обсудим здоровье будущего папы    — Разберем психо-эмоциональные аспекты подготовки к беременности'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg3.png',
    whoBe: '2 запись вебинара + 2 подробная методичка + доступ 3 месяца',
    heading: 'Вебинар «Подготовка к беременности, 2 в 1»',
    price: '3.000 руб.',
    text: 'Полный курс подготовки к беременности, включает в себя <br> — Вебинар «Подготовка к беременности, универсальная часть» <br> — Вебинар «Подготовка к беременности, специализированная часть»',
    idexMixPopup: [0, 1]
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg4.png',
    whoBe: 'запись вебинара + подробная методичка + доступ 3 месяца',
    heading: 'Вебинар «Анализы и обследования во время беременности»',
    price: '500 руб.',
    text: 'Вебинар поможет разобраться в необходимости назначаемых анализов, обследований и их результатах.',
    forWhoPopup: 'Для беременных женщин преимущественно 1-го и 2-го триместра беременности',
    aboutWebinarsPopup: '— Обсудим все нужные и важные обследования во время беременности — Выясним, что необходимо сдать обязательно, а что - вредно и неинформативно при беременности — Когда необходимы дополнительные методы — Как читать и понимать результаты анализов, как отличить норму от патологии'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg5.png',
    whoBe: 'запись вебинара + доступ 3 месяца',
    heading: 'Вебинар «Если долго не наступает беременность: инструкция по решению проблемы»',
    price: '1.500 руб.',
    text: 'Вебинар посвящен причинам и лечению бесплодия во всем его многообразии. Он поможет понять, какие этапы диагностики существуют, какие шаги можно предпринять самостоятельно для решения проблемы, а какие методы может порекомендовать врач.',
    forWhoPopup: 'Для женщин с диагнозом «бесплодие», для тех, кто не может забеременеть больше года',
    aboutWebinarsPopup: '— Об ановуляции (олигоовуляция) и всех ее причинах — О трубно-перитонеальном факторе бесплодия — О маточном факторе — О шеечном факторе — О других формах, таких как бесплодие неясного генеза, а также о мужском факторе — Обсудим стратегию принятия решения об ЭКО, нюансах подготовки к процедуре. Как должен сопровождаться сам протокол ЭКО в целом и/или криоконсервация яйцеклеток — Разберем методы «улучшения» качества яйцеклеток и повышения овариального резерва'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg6.png',
    whoBe: 'запись вебинара + доступ 3 месяца',
    heading: 'Вебинар «Что делать, если были потери беременности? Правильные шаги на пути к счастливому материнству»',
    price: '2.500 руб.',
    text: 'Вебинар поможет разобраться, что такое потеря беременности, почему это происходит и что важно в каждом случае. Любая самопроизвольная потеря беременности требует уточнения причины и внимания к ведению дальнейшей беременности.',
    forWhoPopup: 'Для женщин с диагнозом «невынашивание», для тех, кто потерял беременность на любом сроке',
    aboutWebinarsPopup: '— Органические причины потери беременности (миомы, гиперплазия и полип эндометрия, выраженный аденомиоз – эндометриоз, аномалии развития матки) — Функциональные причины потери беременности (нарушения свертывания крови, генетические факторы, эндокринные нарушения, инфекции и воспаления, ИЦН, нарушения углеводного обмена, психологический фактор и многие другие) — Тактика прерывания в случае потери и реабилитации после потери — Какая применяется стандартная сохраняющая терапия при угрозе и/или выделениях — Профилактика плацентарных нарушений во время беременности'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg7.png',
    whoBe: 'запись вебинара + доступ 3 месяца',
    heading: 'Вебинар «Углеводные нарушения во время беременности. Гестационный сахарный диабет»',
    price: '990 руб.',
    text: 'Вебинар поможет разобраться с диагнозом ГСД, факторами его возникновения, способами диагностики и коррекции состояния без применения лекарств. Гестационный диабет является временной патологией, которую важно вовремя выявить и держать под контролем для дальнейшего благополучия мамы и малыша.',
    forWhoPopup: 'Для всех беременных',
    aboutWebinarsPopup: '— Чем опасен ГСД для мамы и малыша. Кто входит в группу риска по развитию сахарного диабета — Какие исследования необходимы для диагноза — Можно ли заменить оральный глюкозотолерантный тест чем-то другим — Какая профилактика ГСД существует — Принципы питания беременной с нарушениями углеводного обмена'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg8.png',
    whoBe: 'Запись вебинара + гайд + книга рецептов + доступ 3 месяца',
    heading: 'Пакет Вебинар «Гестационный сахарный диабет» + Гайд по питанию и книга рецептов',
    price: '1.500 руб.',
    text: 'Содержит всю информацию о ГСД, подробный гайд по питанию в беременность, который поможет разобраться с рационом, а также книгу рецептов, содержащую 70 рецептов сбалансированных блюд.<br>Включает в себя: <br> <br> — Вебинар «Гестационный сахарный диабет» <br> — Гайд по питанию + книга рецептов',
    geadingPopup: 'Вебинар «Углеводные нарушения во время беременности. Гестационный сахарный диабет»',
    forWhoPopup: 'Для всех беременных',
    aboutWebinarsPopup: '— Чем опасен ГСД для мамы и малыша. Кто входит в группу риска по развитию сахарного диабета — Какие исследования необходимы для диагноза — Можно ли заменить оральный глюкозотолерантный тест чем-то другим — Какая профилактика ГСД существует — Принципы питания беременной с нарушениями углеводного обмена',
    guideNutrition: 'Гайд поможет разобраться, почему вес так важен для репродуктивной системы?',
    forWhoPopupNuntrition: '— Об «идеальном» весе беременной женщины и рекомендациях по прибавке массы тела в каждом триместре  — О том, чем опасна неправильная диета для малыша — Об основных принципах и режиме питания во время беременности, а также о питьевом режиме —  Об особенностях питания при нарушениях углеводного обмена и гестационном диабете (диабете беременных)  — Об особенностях питания при повышении свертывания крови — Об особенностях питания при склонности к газообразованию и вздутию — Об особенностях питания при склонности к отекам',
    booksRecipes: 'В книге рецептов представлено более 70-ти рецептов разнообразного сбалансированного питания во время беременности, подобранного и составленного мною совместно с педиатром и врачом семейной медицины, включающие салаты, закуски, соусы, первые, вторые блюда, десерты, напитки, завтраки'
  },
  {
    img: '/_nuxt/assets/images/webinars/webinarsImg9.png',
    whoBe: 'запись вебинара + доступ 3 месяца',
    heading: 'Вебинар «Контрацепция. Выбор метода, обследование, сопровождение»',
    price: '4.000 руб.',
    text: 'Вебинар поможет разобраться в методах контрацепции, их принципах действия и специфике подбора в каждом отдельном случае. Современная контрацепция — это не только способ предохранения от нежелательной беременности, но и средство для поддержания репродуктивного здоровья.',
    forWhoPopup: 'Для женщин, не планирующих беременность, для женщин в послеродовом периоде',
    aboutWebinarsPopup: '— 9 групп контрацептивов. Чем они отличаются, какие имеют показания и противопоказания — Нужно ли проходить обследования или сдавать анализы перед началом применения контрацептивов или перед их заменой? — Сопровождение во время приема — что имеет смысл добавить дополнительно — Особенности контрацепции после родов — Особенности контрацепции в зависимости от возраста — Особенности контрацепции в зависимости от гинекологических заболеваний — Экстренная контрацепция'
  }
]

  export default {
    data() {
      return {
        width: window.innerWidth,
        str: '',
        isOpenPopup: false,
        indexDataForPopup: 0,
      }
    },
    methods: {
      addIndex(index) {
        console.log(index)
        this.isOpenPopup = true;
        this.indexDataForPopup = index;
      }
    },
    setup () {
      return {
        dataWebinars
      }
    },
  }
</script>

<style lang="scss" scoped>
  p {
    margin: 0;

    @media screen and (max-width: 680px) {
      font-size: 15px;
    }
  }

  h2 {
    margin: 0;
    font-size: 26px;
    color: rgba(100, 76, 92, 1);
    line-height: 33px;

    @media screen and (max-width: 680px) {
      font-size: 22px;
      line-height: 28px;
      margin-right: 10px;
    }
  }

  .overlay__popup-webinars {
    padding: 60px 74px;
    position: fixed;
    visibility: none;
    height: 0;
    opacity: 0;
    transition: .3s;
    width: 100vw;
    z-index: 11;
    top: 0px;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: scroll;

    @media screen and (max-width: 680px) {
      padding: 60px 20px 60px 30px;
    }

    &.active {
      visibility: visible;
      height: 100%;;
      opacity: 1;
    }

    .popup {
      padding: 60px;
      background-color: #ECE7E1;
      max-width: 760px;
      height: auto;
      position: relative;

      @media screen and (max-width: 680px) {
        padding: 30px 43px 30px 30px;
      }

      .mb-80 {
        margin-bottom: 80px;
      }

      .mb-60 {
        margin-bottom: 60px;
      }

      .mt-60 {
        margin-top: 60px;
      }

      .mb-40 {
        margin-bottom: 40px;
      }

      .mb-20 {
        margin-bottom: 20px;
      }

      .close-popup {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;

        @media screen and (max-width: 680px) {
          right: 20px;
        }
      }

      h2 {
        @media screen and (max-width: 380px) {
          width: 211px;
        }
      }

      .for-who {
        max-width: 540px;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 50px;

        @media screen and (max-width: 680px) {
          margin-bottom: 40px;
        }
      }

      .about-webinars {
        max-width: 579px;
        margin-right: 0;

        @media screen and (max-width: 680px) {
          font-size: 15px;
        }
      }

      .block-author {
        display: flex;
        margin-top: 50px;
        @media screen and (max-width: 680px) {
          flex-direction: column;
          margin-top: 40px;
        }

        img {
          margin-right: 17px;
          width: 100px;
          height: 100px;

          @media screen and (max-width: 680px) {
            width: 60px;
            height: 60px;
            margin-bottom: 10px;
          }
        }

        p:first-child {
          font-size: 14px;
          color: rgba(35, 35, 35, 1);
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        p:last-child {
          font-size: 16px;
          color: rgba(35, 35, 35, 1);
          max-width: 374px;

          @media screen and (max-width: 680px) {
           max-width: 100%;
           font-size: 15px;
          }
        }
      }
    }
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
      justify-content: space-between;
      position: relative;
      padding-bottom: 70px;
      margin-bottom: 70px;

      @media screen and (max-width: 1280px) {
        display: flex;
        flex-direction: column;
      }

      &:last-child {
        section {
          border-bottom: none;
        }
      }

      &:nth-child(2n) {
        .webinars-list__card-wrapper-img {
          order: 1;
          
          @media screen and (max-width: 1280px) {
            order: 0;
          }
        }
      }

      

      .icon {
        position: absolute;
      } 

      .wrapperImg1 {
        justify-content: flex-end;
        padding-right: 140px;
        .icon1 {
          top: 68px;
          right: 85px;
          fill: #C5B1B2;
          width: 107px;
          height: 106px;
          transform: rotate(20deg);
          
          @media screen and (max-width: 1280px) {
            width: 55px;
            height: 55px;
            top: -12px;
            right: -60px;
          }
        }

        .icon2 {
          fill: #C99D7A;
          width: 105px;
          height: 100px;
          bottom: -31px;
          left: 123px;

          @media screen and (max-width: 1280px) {
            display: none;
          }
        }

        .icon3 {
          fill: #644C5C;
          width: 146px;
          height: 140px;
          transform: rotate(-25deg);
          bottom: -10px;
          left: -32px;

          @media screen and (max-width: 1280px) {
            width: 72px;
            height: 70px;
            bottom: 47px;
            left: -4px;
          }

          @media screen and (max-width: 680px) {
            bottom: 41px;
            left: -37px;
          }
        }
      }

      .wrapperImg2 {
        justify-content: flex-end;
        padding-right: 35px;

        @media screen and (max-width: 1280px) {
          padding: 0;

          img {
            width: 300px;
            height: 242px;
          }
        }
      }

      .wrapperImg3 {
        justify-content: flex-start;

        @media screen and (max-width: 1280px) {
          padding: 0;

          img {
            width: 391px;
            height: 251px;

            @media screen and (max-width: 680px) {
              width: 300px;
              height: 251px;
            }
          }
        }
      }

      .wrapperImg4 {
        justify-content: flex-end;
        padding-right: 45px;

        @media screen and (max-width: 1280px) {
          padding: 0;

          img {
            width: 290px;
            height: 228px;
          }
        }
      }

      .wrapperImg5 {
        justify-content: flex-start;

        @media screen and (max-width: 1280px) {
          padding: 0;

          img {
            width: 281px;
            height: 233px;
          }
        }
      }

      .wrapperImg6 {
        justify-content: flex-end;
        padding-right: 42px;

        @media screen and (max-width: 1280px) {
          padding: 0;

          img {
            width: 282px;
            height: 240px;
          }
        }
      }

      .wrapperImg7 {
        justify-content: flex-end;
        position: relative;
        right: 95px;

        @media screen and (max-width: 1280px) {
          right: 24px;

          img {
            width: 318px;
            height: 380px;
          }
        }
      }

      .wrapperImg8 {
        justify-content: flex-end;

        @media screen and (max-width: 1280px) {
          padding: 0;

          img {
            width: 366px;
            height: 274px;

            @media screen and (max-width: 680px) {
              width: 306px;
              height: 254px;
            }
          }
        }
      }

      .wrapperImg9 {
        justify-content: flex-end;
        position: relative;
        right: 122px;

        @media screen and (max-width: 1280px) {
          padding: 0;
          position: static;

          img {
            width: 265px;
            height: 248px;
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

      &-wrapper-img {
        position: relative;
        display: flex;
        width: 100%;
        @media screen and (max-width: 1280px) {
          align-items: flex-start;
          justify-content: flex-start!important;
          width: fit-content;
          padding-right: 0!important;
        }

        @media screen and (max-width: 680px) {
          margin: 0 auto;
        }

        img {
          @media screen and (max-width: 1280px) {
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
        max-width: 560px;
        width: 100%;

        p:first-child {
          font-size: 14px;
          color: rgba(35, 35, 35, 1);
          text-transform: uppercase;
        }

        h2 {
          @media screen and (max-width: 680px) {
            margin-top: 10px;
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