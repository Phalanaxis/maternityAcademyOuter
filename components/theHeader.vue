<template>
  <header class="academy-header">
    <nuxt-link
      to="/"
      class="academy-header__logo-wrapper"
    >
      <img src="~assets/images/logo.png" alt="" />
    </nuxt-link>
    <div class="academy-header__nav-menu">
      <nuxt-link
        to="/"
        class="academy-header__nav-link"
      >
        О нас
      </nuxt-link>
      <nuxt-link
        to="/"
        class="academy-header__nav-link"
      >
        Для кого
      </nuxt-link>
      <nuxt-link
        to="/"
        class="academy-header__nav-link"
      >
        Программы
      </nuxt-link>
      <nuxt-link
        to="/"
        class="academy-header__nav-link"
      >
        Отзывы
      </nuxt-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .academy-header {
    height: 85px;
    border-bottom: 1px solid #C5B1B2;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo-wrapper {
      width: 140px;
      height: 60px;
    }

    &__nav-link {
      font-size: 16px;
      color: #232323;
      text-decoration: none;
      &:not(:last-child) {
        margin: 0 30px 0 0;
      }
    }
  }
</style>