<template>
  <div class="work-format">
    <h1 class="work-format__title" id="workFormats">
      Форматы работы
    </h1>
    <div class="work-format__list">
      <div
        class="work-format__item"
      >
        <img class="work-format__item-image" src="@/assets/images/workFormatHovers/1.png" />
        <div>
          <h3 class="work-format__item-title">
            Вебинары
          </h3>
          <div class="work-format__item-text">
            Структурированные материалы, которые дадут максимум информации по важным вопросам
          </div>
        </div>
        <div class="work-format__item-link">
          Подробнее
          <svg-arrow-right class="work-format__item-arrow" />
        </div>
      </div>
      <div
          class="work-format__item"
      >
        <img class="work-format__item-image work-format__item-image_top" src="@/assets/images/workFormatHovers/2.png" />
        <div>
          <h3 class="work-format__item-title">
            Школа беременных и мам
          </h3>
          <div class="work-format__item-text">
            Всё, что нужно знать о материнстве, подготовке, сложностях процесса и многом другом
          </div>
        </div>
        <div class="work-format__item-link">
          Подробнее
          <svg-arrow-right class="work-format__item-arrow" />
        </div>
      </div>
      <div
          class="work-format__item"
      >
        <img class="work-format__item-image" src="@/assets/images/workFormatHovers/3.png" />
        <div>
          <h3 class="work-format__item-title">
            Гайды и методички
          </h3>
          <div class="work-format__item-text">
            Небольшие и полезные сборники с прикладными советами
          </div>
        </div>
        <div class="work-format__item-link">
          Подробнее
          <svg-arrow-right class="work-format__item-arrow" />
        </div>
      </div>
      <div
          class="work-format__item"
      >
        <img class="work-format__item-image" src="@/assets/images/workFormatHovers/4.png" />
        <div>
          <h3 class="work-format__item-title">
            Персонализированные проекты
          </h3>
          <div class="work-format__item-text">
            Индивидуально разработанные программы по восстановлению женского здоровья
          </div>
        </div>
        <div class="work-format__item-link">
          Подробнее
          <svg-arrow-right class="work-format__item-arrow" />
        </div>
      </div>
      <div
          class="work-format__item"
      >
        <img class="work-format__item-image work-format__item-image_top" src="@/assets/images/workFormatHovers/5.png" />
        <div>
          <h3 class="work-format__item-title">
            Специалистам и медработникам
          </h3>
          <div class="work-format__item-text">
            Обучающие продукты, позволяющие перенять опыт и знания специалиста международного уровня
          </div>
        </div>
        <div class="work-format__item-link">
          Подробнее
          <svg-arrow-right class="work-format__item-arrow" />
        </div>
      </div>
      <router-link
        class="work-format__item"
        to="/consultations"
      >
        <img class="work-format__item-image" src="@/assets/images/workFormatHovers/6.png" />
        <div>
          <h3 class="work-format__item-title">
            Консультации
          </h3>
          <div class="work-format__item-text">
            Очная или онлайн работа со специалистом
          </div>
        </div>
        <div class="work-format__item-link">
          Подробнее
          <svg-arrow-right class="work-format__item-arrow" />
        </div>
      </router-link>
    </div>
    <div class="work-format__message-us-block">
      <svg-almost-circle class="work-format__almost-circle" />
      <svg-union class="work-format__union" />
      <svg-arrow class="work-format__arrow" />
      <svg-plus-icon class="work-format__plus" />
      <h3 class="work-format__message-us-title">
        Не получается определиться с выбором?
        Напишите нам — мы поможем
        <div class="work-format__message-us-button-container">
          <div class="work-format__message-us-button">
            Написать в Telegram
          </div>
        </div>
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .work-format {
    width: 100%;

    &__title {
      color: #644C5C;
      font-size: 38px;
      text-align: left;
      margin: 0 0 40px 0;
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 40px;

      @media screen and (max-width: 1280px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
      }
    }

    &__item {
      position: relative;
      background-color: #839389;
      border-radius: 15px;
      padding: 40px;
      height: 360px;
      transition: background-color .2s;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-decoration: none;

      @media screen and (max-width: 1280px) {
        height: 280px;
      }

      @media screen and (max-width: 680px) {
        height: 380px;
      }

      &:hover {
        background-color: #6B8073;

        .work-format__item-image {
          opacity: 1;
        }
      }
    }

    &__item-title {
      font-size: 26px;
      color: #FEF8F2;
      margin: 0 0 20px 0;
      max-width: 75%;
    }

    &__item-text {
      color: #FEF8F2;
      font-size: 16px;
      line-height: 24px;
    }

    &__item-image {
      position: absolute;
      bottom: -30px;
      right: -30px;
      opacity: 0;
      transition: opacity .2s;

      @media screen and (max-width: 1280px) {
        bottom: unset;
        top: -40px;
      }

      @media screen and (max-width: 680px) {
        display: none;
      }

      &_top {
        bottom: unset;
        top: -30px;
      }
    }

    &__item-link {
      color: #FEF8F2;
      font-weight: 600;
      font-size: 18px;
    }

    &__item-arrow {
      fill: #FEF8F2;
    }

    &__message-us-block {
      position: relative;
      margin: 50px 0 0 0;
      padding: 80px 0;
      background: #C5B1B2;
      border-radius: 15px;
      display: flex;
      justify-content: center;

      @media screen and (max-width: 1280px) {
        padding: 60px 40px;
      }

      @media screen and (max-width: 680px) {
        padding: 60px 45px;
      }
    }

    &__message-us-title {
      color: #FEF8F2;
      max-width: 650px;
      text-align: center;
      font-size: 26px;
      line-height: 34px;
    }

    &__message-us-button-container {
      display: flex;
      justify-content: center;
      margin: 40px 0 0 0;
    }

    &__message-us-button {
      padding: 18px 45px;
      background-color: #FEF8F2;
      border-radius: 5px;
      color: #644C5C;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;

      @media screen and (max-width: 680px) {
        font-size: 16px;
      }
    }

    &__almost-circle {
      position: absolute;
      fill: #78353E;
      right: 145px;
      top: -5px;
      transform: scale(1.4) rotate(120deg);

      @media screen and (max-width: 1280px) {
        top: unset;
        bottom: 100px;
        right: -40px;
      }

      @media screen and (max-width: 1280px) {
        bottom: unset;
        top: -30px;
        right: unset;
        left: 20px;
        transform: scale(1) rotate(120deg);
      }
    }

    &__union {
      position: absolute;
      fill: #644C5C;
      right: 65px;
      top: 70px;
      transform: rotate(45deg);

      @media screen and (max-width: 1280px) {
        top: unset;
        right: 40px;
        bottom: 30px;
      }

      @media screen and (max-width: 1280px) {
        bottom: unset;
        top: -30px;
      }
    }

    &__arrow {
      position: absolute;
      fill: #C99D7A;
      transform: rotate(45deg);
      left: 140px;
      top: 50%;

      @media screen and (max-width: 1280px) {
        display: none;
      }
    }

    &__plus {
      position: absolute;
      fill: #FEF8F2;
      left: 100px;
      top: 65%;

      @media screen and (max-width: 1280px) {
        display: none;
      }
    }
  }
</style>
<script setup lang="ts">
import SvgPlusIcon from "~/components/svg/SvgPlusIcon.vue";
</script>