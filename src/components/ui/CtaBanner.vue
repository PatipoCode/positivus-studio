<script setup>
import BaseButton from "../base/BaseButton.vue";

const base = import.meta.env.BASE_URL;
</script>

<template>
  <div class="cta" aria-label="Call to action">
    <div class="cta__content">
      <h3 class="cta__title">Let's make things happen</h3>
      <p class="cta__description">
        Contact us today to learn more about how our digital marketing services
        can help your business grow and succeed online.
      </p>
      <RouterLink to="/#contact"
        ><BaseButton>Get your free proposal!</BaseButton></RouterLink
      >
    </div>
    <img
      :src="base + 'icons/cta-Illustration.svg'"
      alt=""
      class="cta__image"
      aria-hidden="true"
    />
  </div>
</template>

<style lang="scss" scoped>
.cta {
  height: 347px;
  background-color: $color-card;
  border-radius: 45px;
  padding: $card-padding;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-top: 123.5px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 26px;
    max-width: fluid(260px, 500px, 32vw);

    @media (max-width: $bp-md) {
      max-width: 100%;

      .button {
        width: 100%;
        text-align: center;
      }
    }
  }

  &__title {
    font-size: $text-3xl;
    font-weight: 500;
  }

  &__description {
    font-size: $text-lg;
    line-height: 1.5;
  }

  &__image {
    width: fluid(150px, 360px, 44vw);
    flex-shrink: 0;

    @media (max-width: $bp-md) {
      display: none;
    }
  }
}
</style>
