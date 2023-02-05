<template>
  <div class="intro-block__container">
    <div class="intro-block__figures-block-left">
      <svg-star class="intro-block__figures-star" />
      <svg-union class="intro-block__figures-union" />
      <img
        src="~assets/images/photo-rectangle.png"
        class="intro-block__figures-rectangle-image"
      >
    </div>
    <div class="intro-block__figures-block-right">
      <svg-cheese-icon class="intro-block__figures-ellipse"  />
      <lazy-svg-half-circle class="intro-block__figures-half-circle"  />
      <img
        src="~assets/images/photo-octagon.png"
        class="intro-block__figures-octagon-image"
      >
    </div>
    <svg-arrow class="intro-block__figures-arrow" />
    <h1 class="intro-block__title">
      Академия осознанного материнства: всё,<br> что важно знать о женском здоровье
    </h1>
    <div class="intro-block__text">
      Научитесь правильно заботиться о себе вместе со специалистами международного уровня
    </div>
    <nuxt-link to="/#workFormats" class="intro-block__button">
      Выбрать формат работы
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
  .intro-block {

    &__container {
      position: relative;
      width: 1160px;
      height: 425px;
      margin: 90px 0 0 0;
      padding: 80px 0;
      background-color: #839389;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-width: 1280px) {
        width: 680px;
        height: auto;
        padding: 60px 50px;
      }

      @media screen and (max-width: 680px) {
        width: 360px;
        padding: 100px 30px 60px 30px;
      }
    }

    &__title {
      color: #FEF8F2;
      font-size: 38px;
      line-height: 138%;
      text-align: center;

      @media screen and (max-width: 680px) {
        font-size: 30px;
      }
    }

    &__text {
      max-width: 400px;
      text-align: center;
      color: #FEF8F2;
      font-size: 16px;
      line-height: 24px;
    }

    &__button {
      color: #644C5C;
      background-color: #FEF8F2;
      padding: 18px 45px;
      border-radius: 5px;
      margin: 40px 0 0 0;
      font-weight: 600;
      font-size: 18px;
      text-decoration: none;

      @media screen and (max-width: 680px) {
        font-size: 16px;
      }
    }

    &__figures-block-left,
    &__figures-block-right {
      position: absolute;
      width: 100px;
      height: 100px;
    }

    &__figures-block-left {
      top: 35%;
      left: 0;

      @media screen and (max-width: 1280px) {
        top: unset;
        bottom: 15%;
      }

      @media screen and (max-width: 680px) {
        bottom: unset;
        top: -50px;
        left: 30%;
      }
    }

    &__figures-block-right {
      @media screen and (max-width: 680px) {
        display: none;
      }
    }

    &__figures-star {
      position: absolute;
      top: -30%;
      right: -50%;
      fill: #C99D7A;

      @media screen and (max-width: 1280px) {
        right: -10%;
      }
    }

    &__figures-union {
      position: absolute;
      bottom: 0;
      right: -50%;
      fill: #FEF8F2;

      @media screen and (max-width: 1280px) {
        right: -20%;
      }
    }

    &__figures-rectangle-image {
      position: absolute;
      top: 0;
      left: -50%;
    }

    &__figures-block-right {
      top: 30%;
      right: 30px;
    }

    &__figures-ellipse {
      position: absolute;
      left: 0;
      top: 0;
      fill: #064848;

      @media screen and (max-width: 1280px) {
        display: none;
      }
    }

    &__figures-half-circle {
      position: absolute;
      bottom: 0;
      right: 0;
      fill: #C5B1B2;
    }

    &__figures-octagon-image {
      position: absolute;
      right: -80%;
      top: -70%;
    }

    &__figures-arrow {
      position: absolute;
      bottom: -35px;
      left: 15%;
      fill: #78353E;

      @media screen and (max-width: 1280px) {
        display: none;
      }
    }
  }
</style>