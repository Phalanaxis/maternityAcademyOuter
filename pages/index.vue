<template>
  <div class="main-page__container">
    <blocks-intro-main />
    <blocks-description-block />
  </div>
  <div class="background-violet">
    <div class="main-page__container ">
      <blocks-test-block />
    </div>
  </div>
  <div class="main-page__container">
    <blocks-our-suggestions-block />
    <blocks-if-you-block />
    <blocks-work-format />
    <blocks-main-swiper />
    <blocks-description-minor />
  </div>
  <div class="background-violet">
    <div class="main-page__container ">
      <blocks-command-description />
    </div>
  </div>
  <div class="main-page__container last-container">
<!--    <blocks-reviews-block />-->
    <blocks-message-us />
  </div>
</template>

<style lang="scss" scoped>
  .main-page {

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 1460px;
      margin: 0 auto;
      padding: 0 40px;

      @media screen and (max-width: 1280px) {
        max-width: 680px;
      }

      @media screen and (max-width: 680px) {
        padding: 0 20px;
      }

      @media screen and (max-width: 400px) {
        padding: 0;
      }
    }
  }

  .background-violet {
    background-color: #644C5C;

    @media screen and (max-width: 680px) {
      border-radius: 15px;
    }
  }

  .last-container {
    margin-bottom: 150px;
  }
</style>