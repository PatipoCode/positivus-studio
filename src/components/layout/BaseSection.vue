<script setup lang="ts">
import BaseContainer from '@/components/layout/BaseContainer.vue';

defineProps({
  id: String,
  title: String,
  description: String,
  descriptionWidth: String,
});
</script>

<template>
  <section :id="id" class="section">
    <BaseContainer>
      <div v-if="title || description" class="section__header">
        <h2 v-if="title" class="section__title">{{ title }}</h2>
        <p
          v-if="description"
          class="section__description"
          :style="descriptionWidth ? { maxWidth: descriptionWidth } : {}"
        >
          {{ description }}
        </p>
      </div>
      <slot />
    </BaseContainer>
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding: $section-padding;
  scroll-margin-top: 116px;

  &__header {
    display: flex;
    align-items: center;
    gap: fluid(20px, 40px, 2.5vw);
    margin-bottom: fluid(40px, 80px, 5vw);

    @media (max-width: 940px) {
      align-items: flex-start;
    }
  }

  &__title {
    font-size: $text-3xl;
    font-weight: 500;
    background-color: $color-accent;
    padding: 0 7px;
    border-radius: 7px;
    white-space: nowrap;
  }

  &__description {
    font-size: $text-lg;
    line-height: 1.5;
    max-width: 580px;
  }
}
</style>
