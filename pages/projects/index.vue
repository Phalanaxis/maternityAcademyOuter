<template>
  <div class="projects-page__container">
    <blocks-projects-intro />
    <blocks-projects-repro class="projects-page__project" />
    <blocks-projects-meno class="projects-page__project" />
    <blocks-projects-control class="projects-page__project" />
    <blocks-projects-academy />
  </div>
</template>

<style lang="scss" scoped>
  .projects-page {

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 1460px;
      margin: 0 auto;
      padding: 0 40px 150px 40px;

      @media screen and (max-width: 1280px) {
        max-width: 680px;
      }

      @media screen and (max-width: 680px) {
        padding: 0 20px 120px 20px;
      }

      @media screen and (max-width: 400px) {
        padding: 0 0 90px 0;
      }
    }

    &__project {
      margin: 120px 0 0 0;

      @media screen and (max-width: 1280px) {
        margin: 90px 0 0 0;
      }

      @media screen and (max-width: 1280px) {
        margin: 70px 0 0 0;
      }
    }
  }
</style>