<template>
  <a :href="link" class="button-primary">{{ content }}</a>
</template>
<script>
  export default {
    props: {
      content: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: '#'
      }
    }
  }
</script>
<style lang="scss" scoped>
.button-primary {
  text-decoration: none;
  padding: 18px 45px;
  color: white;
  background: rgba(6, 72, 72, 1);
  font-size: 18px;

  @media screen and (max-width: 680px) {
    font-size: 16px;
    padding: 17px 40px;
  }
}
</style>