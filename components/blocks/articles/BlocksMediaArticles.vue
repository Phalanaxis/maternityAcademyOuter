<template>
  <h2>Статьи в СМИ</h2>
  <div class="wrapper-card">
    <div class="card">
      <div class="img"></div>
      <h3 class="heading-card">Женская сексуальность после 40 лет: привычки, которые помогут вам повысить либидо</h3>
      <p class="title-card">О том, какие правила необходимо соблюдать после 40 лет, чтобы держать себя в тонусе</p>
      <elements-read-articles />
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
  h2 {
    font-family: Oswald;
    font-size: 32px;
    line-height: 41px;
    color:rgba(100, 76, 92, 1);
    width: 100%;
    margin-bottom: 20px;

    @media screen and (max-width: 680px) {
      font-size: 28px;
      line-height: 36px;
      max-width: 270px;
      width: 100%;
    }
  }

  .wrapper-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    column-gap: 40px;
    width: 100%;

    @media screen and (max-width: 1280px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .card {
      padding: 30px;
      max-width: 560px;
      width: 100%;  
      background: rgba(236, 231, 225, 1);
      border-radius: 15px;
      height: 340px;

      @media screen and (max-width: 1280px) {
        width: auto;
      }

      .img {
        width: 152px;
        height: 66px;
        background-color: #fff;
        margin-bottom: 30px;
      }

      .heading-card {
        font-family: Oswald;
        font-size: 22px;
        line-height: 28px;
        color:rgba(100, 76, 92, 1);
        margin-bottom: 15px;

        @media screen and (max-width: 680px) {
          font-size: 28px;
          line-height: 36px;
        }
      }

      .title-card {
        font-size: 16px;
        line-height: 24px;
        color: rgba(35, 35, 35, 1);
        margin-bottom: 30px;
      }
    }
  }
</style>
