<script setup>
import BaseButton from "../base/BaseButton.vue";
import BaseContainer from "../layout/BaseContainer.vue";
import BrandsBar from "../ui/BrandsBar.vue";

const base = import.meta.env.BASE_URL;
</script>

<template>
  <section class="hero" aria-label="Hero">
    <BaseContainer class="hero__content">
      <div class="hero__text">
        <h1 class="hero__title">
          Navigating the digital landscape for success
        </h1>
        <p class="hero__description">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <RouterLink to="/#contact"><BaseButton>Book a consultation</BaseButton></RouterLink>
      </div>
      <img
        :src="base + 'hero-illustration.png'"
        alt="Digital marketing illustration"
        class="hero__illustration"
        aria-hidden="true"
      />
    </BaseContainer>

    <BrandsBar />
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background-color: $color-white;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: clamp(40px, 5vw, 70px);
    padding-bottom: clamp(40px, 5vw, 70px);
  }

  &__text {
    width: fluid(280px, 531px, 35vw);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 35px;

    @media (max-width: 780px) {
      width: 100%;
      text-align: center;
      align-items: center;
    }
  }

  &__title {
    font-size: $text-5xl;
    font-weight: 500;
    line-height: 1.15;
  }

  &__description {
    font-size: $text-xl;
    line-height: 1.4;
  }

  &__illustration {
    width: fluid(280px, 600px, 38vw);
    flex-shrink: 0;

    @media (max-width: 780px) {
      display: none;
    }
  }
}
</style>
