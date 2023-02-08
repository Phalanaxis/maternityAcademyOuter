<template>
  <div class="page__container">
    <blocks-consultations-intro />
    <blocks-consultations-about />
    <blocks-consultations-important />
  </div>
  <div class="background-violet">
    <div class="page__container ">
      <blocks-consultations-sign-up />
    </div>
  </div>
  <div class="page__container ">
    <blocks-consultations-how-to />
    <blocks-message-us
      label="Если вы не можете определиться с врачом или хотите задать вопросы о консультациях, напишите нам — мы поможем"
    />
    <blocks-consultations-how-to-get />
    <blocks-consultations-questions />
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
      padding: 0 40px 0 40px;

      @media screen and (max-width: 1280px) {
        max-width: 680px;
      }

      @media screen and (max-width: 680px) {
        padding: 0 20px 0 20px;
      }

      @media screen and (max-width: 400px) {
        padding: 0 0 0 0;
      }
    }
  }

  .background-violet {
    background-color: #644C5C;

    @media screen and (max-width: 680px) {
      border-radius: 15px;
    }
  }
</style>
<script setup lang="ts">
import BlocksConsultationsHowToGet from "~/components/blocks/consultations/BlocksConsultationsHowToGet.vue";
</script>