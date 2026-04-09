<script setup lang="ts">
import type { CardVariant } from "@/types/index";
import IconArrow from "@/components/icons/IconArrow.vue";

interface Props {
  title: string;
  image: string;
  variant?: CardVariant;
  href?: string;
}

withDefaults(defineProps<Props>(), {
  variant: "light",
  href: "#",
});
</script>

<template>
  <article :class="['card', `card--${variant}`]">
    <div class="card__body">
      <h3 class="card__title">
        <span class="card__title-text">{{ title }}</span>
      </h3>

      <RouterLink
        :to="href"
        class="card__link"
        :aria-label="`Learn more about ${title}`"
      >
        <IconArrow
          class="card__link-icon"
          :circle-fill="variant === 'dark' ? '#fff' : '#191A23'"
          :arrow-fill="variant === 'dark' ? '#191A23' : '#B9FF66'"
        />
        <span>Learn more</span>
      </RouterLink>
    </div>
    <img :src="image" :alt="title" class="card__image" aria-hidden="true" />
  </article>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 45px;
  border: 1px solid $color-dark;
  box-shadow: 0 5px 0 0 $color-dark;
  padding: $card-padding;
  display: flex;
  justify-content: space-between;
  height: fluid(220px, 310px, 22vw);

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 220px;
    gap: fluid(0px, 20px, 2vw);
  }

  &--light {
    background-color: $color-card;
  }

  &--accent {
    background-color: $color-accent;

    .card__title-text {
      background-color: $color-white;
    }
  }

  &--dark {
    background-color: $color-dark;
    color: $color-white;

    .card__title-text {
      background-color: $color-accent;
    }
  }

  &__title {
    font-size: $text-3xl;
    font-weight: 500;

    @media (max-width: $bp-lg) {
      font-size: $text-2xl;
    }
  }

  &__title-text {
    background-color: $color-accent;
    display: inline;
    padding: 5px 7px;
    border-radius: 7px;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    line-height: 1.3;
  }

  &__image {
    width: fit-content;
    max-width: fluid(90px, 210px, 14vw);
    height: fit-content;

    @media (min-width: 550px) and (max-width: 810px) {
      display: none;
    }

    @media (max-width: 550px) {
      max-width: 100px;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: $text-xl;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;

      .card__link-icon {
        transform: rotate(30deg);
      }
    }
  }

  &__link-icon {
    transition: transform 0.3s;
  }
}
</style>
