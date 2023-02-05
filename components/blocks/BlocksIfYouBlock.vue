<template>
  <div class="if-you-block">
    <h1 class="if-you-block__title">
      Если вы
    </h1>
    <div class="if-you-block__list">
      <Elements-iconed-item
        v-for="item in tabsList"
        :icon-name="item.icon"
        :icon-color="item.color"
        :text="item.text"
      />
    </div>
    <div class="if-you-block__button-block">
      <div class="if-you-block__button">
        Выбрать формат работы
      </div>
    </div>
  </div>
</template>

<script>
const tabsList = [
  {
    icon: 'almostCircle',
    color: '#C99D7A',
    text: 'Заботитесь о своём здоровье и хотите обладать актуальной информацией'
  },
  {
    icon: 'SvgDiamondIcon',
    color: '#839389',
    text: 'Переживаете и чувствуете, что с организмом что-то «не так»'
  },
  {
    icon: 'SvgStarNine',
    color: '#78353E',
    text: 'Нуждаетесь в экспертном мнении'
  },
  {
    icon: 'SvgPineLeft',
    color: '#C5B1B2',
    text: 'Сомневаетесь в назначениях своего специалиста'
  },
  {
    icon: 'SvgGex',
    color: '#644C5C',
    text: 'Столкнулись с гормональными изменениями и оказались к ним не готовы'
  },
  {
    icon: 'SvgSoftIcon',
    color: '#064848',
    text: 'Готовитесь к беременности и хотите все заранее предусмотреть или уже беременны'
  },
  {
    icon: 'heartIcon',
    color: '#C99D7A',
    text: 'Не можете забеременеть или испытываете трудности с вынашиванием малыша'
  },
  {
    icon: 'SvgCheeseIcon',
    color: '#839389',
    text: 'Имеете нерешенные проблемы со здоровьем, для которых «пришло время»'
  }
]

  export default {
    setup () {

      return {
        tabsList
      }
    }
  }
</script>

<style lang="scss" scoped>
  .if-you-block {
    width: 100%;
    padding: 0 0 150px 0;

    &__title {
      color: #644C5C;
      font-size: 38px;
      font-weight: 700;
      text-align: left;
      margin: 0 0 50px 0;

      @media screen and (max-width: 680px) {
        font-size: 28px;
      }
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 40px;

      @media screen and (max-width: 1280px) {
        grid-template-columns: 1fr 1fr;
      }

      @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
      }
    }

    &__button-block {
      margin: 60px 0 0 0;
      display: flex;
      justify-content: center;

      @media screen and (max-width: 1280px) {
        justify-content: left;
      }
    }

    &__button {
      color: #FEF8F2;
      font-size: 18px;
      font-weight: 600;
      padding: 18px 45px;
      background: #064848;
      border-radius: 5px;
      cursor: pointer;

      @media screen and (max-width: 680px) {
        font-size: 16px;
      }
    }
  }
</style>