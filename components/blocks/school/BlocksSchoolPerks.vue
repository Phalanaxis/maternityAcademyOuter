<template>
  <div class="school-perks">
    <h2 class="school-perks__title">
      Все женщины, вступившие в Школу беременности, становятся участницами закрытого сообщества, где:
    </h2>
    <div class="school-perks__list">
      <Elements-iconed-item
        v-for="item in tabsList"
        :icon-name="item.icon"
        :icon-color="item.color"
        :text="item.text"
      />
    </div>
  </div>
</template>

<script>
const tabsList = [
  {
    icon: 'SvgStarNine',
    color: '#78353E',
    text: '<b>Бесплатно</b> получают новые полезные материалы от экспертов Академии осознанного материнства'
  },
  {
    icon: 'heartIcon',
    color: '#C99D7A',
    text: 'При наличии окон в расписании могут обратиться за <b>онлайн-консультацией к профессору Элисо Джобава</b> без очного посещения за дополнительную плату'
  },
  {
    icon: 'SvgCheeseIcon',
    color: '#839389',
    text: 'Становятся обладательницами <b>персональной скидки</b> на забор и хранение биоматериала в самом крупном криобанке России — Гемабанке'
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
  .school-perks {
    width: 100%;
    margin: 150px 0 0 0;

    &__title {
      color: #644C5C;
      font-size: 26px;
      max-width: 50%;
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>