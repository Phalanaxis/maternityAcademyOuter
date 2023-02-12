<template>
  <div class="page__container">
    <Blocks-about-intro />
    <Blocks-about-science-works />
    <blocks-about-directions />
    <blocks-about-education />
    <blocks-message-us />
  </div>
</template>
<script>
 export default {
  mounted() {
    console.log(this.$store)
  }
 }
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
      max-width: 680px;
    }

    @media screen and (max-width: 680px) {
      padding: 0 20px 120px 20px;
    }

    @media screen and (max-width: 400px) {
      padding: 0 0 60px 0;
    }
  }
}
</style>