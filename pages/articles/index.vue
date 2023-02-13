<template>
  <div class="page__container">
    <h1>Полезные материалы и статьи</h1>
      <blocks-articles-cards :data="data.dataCard"/> 
      <blocks-media-articles />
      <blocks-slider-articles />
    <blocks-useful-articles />
    {{ store.point }}
  </div>
</template>
<script setup>
  import {useArticlesStore} from '~~/stores/articles/articlesStore'
  import {useUsefulStore} from '~~/stores/articles/usefulStore'

  const store = useUsefulStore();
  const data = useArticlesStore();  
</script>
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
      max-width: 720px;
    }

    @media screen and (max-width: 680px) {
      padding: 0 20px 120px 20px;
    }

    @media screen and (max-width: 400px) {
      padding: 0 30px 60px 30px;
    }
    
    h1 {
      color: rgba(100, 76, 92, 1);
      font-size: 38px;
      text-align: left;
      width: 100%;
      margin: 90px 0 50px 0;

      @media screen and (max-width: 1280px) {
        font-size: 36px;
      }

      @media screen and (max-width: 680px) {
        font-size: 30px;
      }
    }
  }
}
</style>