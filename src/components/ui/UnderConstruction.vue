<script setup>
import IconConstruction from "../icons/IconConstruction.vue";

defineProps({
  title: { type: String, default: "Under Construction" },
  message: {
    type: String,
    default: "This page is currently being built. Check back soon!",
  },
});
</script>

<template>
  <div class="under-construction">
    <IconConstruction class="under-construction__icon" />
    <h2 class="under-construction__title">{{ title }}</h2>
    <p class="under-construction__message">{{ message }}</p>
  </div>
</template>

<style lang="scss" scoped>
.under-construction {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: $card-padding;
  border: 1px dashed rgba($color-dark, 0.3);
  border-radius: $radius-lg;
  margin: 40px 0;

  &__icon {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;

    @media (min-width: $bp-lg) {
      width: 72px;
      height: 72px;
    }
  }

  &__title {
    font-size: $text-2xl;
    font-weight: 700;
    margin-bottom: 8px;
  }

  &__message {
    font-size: $text-lg;
    color: #666;
  }
}
</style>
