<template>
  <div class="page__container">
    <Blocks-webinars-intro />
    <blocks-webinars-list />
    <Blocks-webinars-science-works />
    <blocks-webinars-education />
    <blocks-message-us />
  </div>
</template>

<style lang="scss" scoped>
.page {

  &__container {
     display: flex;
     flex-direction: column;
     align-items: center;
     max-width: 1240px;
     margin: 0 auto;
     padding: 0 40px 150px 40px;

    @media screen and (max-width: 1280px) {
      max-width: 680px;
    }

    @media screen and (max-width: 680px) {
      padding: 0 20px 120px 20px;
    }

    @media screen and (max-width: 400px) {
      padding: 0 30px 60px 30px;
    }
  }
}
</style>