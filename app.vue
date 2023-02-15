<template>
  <the-header />
  <main class="page-container">
    <nuxt-page />
  </main>
  <the-footer />
</template>

<style lang="scss">
  .page-container {
    overflow: hidden;
    padding: 0 0 150px 0;

    @media screen and (max-width: 1200px) {
      padding: 0 0 120px 0;
    }

    @media screen and (max-width: 680px) {
      padding: 0 0 90px 0;
    }
  }

  .section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1460px;
    margin: 0 auto;
    padding: 0 40px;

    @media screen and (max-width: 1200px) {
      max-width: 680px;
    }

    @media screen and (max-width: 680px) {
      padding: 0 20px;
    }
  }

  .background-violet {
    background-color: #644C5C;

    @media screen and (max-width: 680px) {
      border-radius: 15px;
    }
  }
</style>
