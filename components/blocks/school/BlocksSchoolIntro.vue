<template>
  <div class="intro-block__container">
    <svg-arrow class="intro-block__arrow" />
    <svg-star-nine class="intro-block__star" />
    <svg-heart-icon class="intro-block__heart" />
    <div class="intro-block__figures-block-left">
      <img
        src="@/assets/images/school/starImage.png"
        class="intro-block__figures-rectangle-image"
      >
    </div>
    <h1 class="intro-block__title">
      Школа беременных — место, где будущие<br> мамы обретают спокойствие
    </h1>
    <div class="intro-block__text">
      Здесь вы получите новые знания и будете чувствовать себя уверенно в любой ситуации
    </div>
    <nuxt-link to="/" class="intro-block__button">
      Подробнее
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.intro-block {

  &__container {
    width: 100%;
    position: relative;
    margin: 90px 0 0 0;
    padding: 80px 0;
    background-color: #C5B1B2;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1200px) {
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
    max-width: 500px;
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

    @media screen and (max-width: 1200px) {
      top: unset;
      bottom: 15%;
    }

    @media screen and (max-width: 680px) {
      bottom: unset;
      top: -50px;
      left: 30%;
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

  &__arrow {
    position: absolute;
    fill: #644C5C;
    transform: rotate(40deg);
    top: 20px;
    left: -60px;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }

  &__heart {
    position: absolute;
    fill: #064848;
    bottom: 60px;
    right: 150px;
    transform: rotate(50deg);

    @media screen and (max-width: 1200px) {
      right: 0;
      transform: rotate(50deg) scale(0.5);
    }
  }

  &__star {
    position: absolute;
    fill: #FEF8F2;
    bottom: 20px;
    right: 110px;
  }

}
</style>