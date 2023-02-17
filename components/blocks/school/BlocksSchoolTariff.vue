<template>
  <div class="school-tariff">
    <div class="school-tariff__tabs-wrapper">
      <div
        :class="{
          'school-tariff__tab': true,
          'school-tariff__tab_active': activeTab === 1
        }"
        @click="activeTab = 1"
      >
        <h3 class="school-tariff__tab-title">
          По пакетам
        </h3>
        <div class="school-tariff__tab-label">
          Оптимальное наполнение
        </div>
        <svg-arrow-right class="school-tariff__tab-arrow" />
      </div>
      <div
        :class="{
          'school-tariff__tab': true,
          'school-tariff__tab_active': activeTab === 2
        }"
        @click="activeTab = 2"
      >
        <h3 class="school-tariff__tab-title">
          По триместрам
        </h3>
        <div class="school-tariff__tab-label">
          Спецпредложение
        </div>
        <svg-arrow-right class="school-tariff__tab-arrow" />
      </div>
    </div>
    <div class="school-tariff__packages-list">

    </div>
  </div>
</template>

<script>

  export default {

    setup () {
      const activeTab = ref(1)

      return {
        activeTab
      }
    }
  }
</script>

<style lang="scss" scoped>
  .school-tariff {
    width: 100%;

    &__tabs-wrapper {
      display: flex;
      margin: 40px 0 0 0;
    }

    &__tab {
      position: relative;
      width: calc(50% - 20px);
      padding: 20px 40px;
      background-color: #ECE7E1;
      border-radius: 15px;
      color: #064848;
      display: flex;
      align-items: flex-end;
      cursor: pointer;
      transition: background-color .2s, color .2s;

      &:first-child {
        margin: 0 40px 0 0;
      }

      &_active {
        background-color: #064848;
        color: #FEF8F2;

        .school-tariff__tab-arrow {
          fill: #FEF8F2;
        }
      }
    }

    &__tab-title {
      margin: 0 15px 0 0;
      font-size: 22px;
      line-height: 28px;
    }

    &__tab-label {
      font-size: 14px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      line-height: 21px;
    }

    &__tab-arrow {
      position: absolute;
      fill: #064848;
      transform: rotate(90deg);
      right: 20px;
      top: 28px;
      transition: fill .2s;
    }
  }
</style>
