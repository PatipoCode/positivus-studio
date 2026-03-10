<script setup>
import AppContainer from "./AppContainer.vue";

defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <section class="section">
    <AppContainer>
      <div v-if="title || description" class="section__header">
        <h2 v-if="title" class="section__title">{{ title }}</h2>
        <p v-if="description" class="section__description">{{ description }}</p>
      </div>
      <slot />
    </AppContainer>
  </section>
</template>

<style scoped>
.section {
  padding: 140px 0;
}

.section__header {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 80px;
}

.section__title {
  font-size: 40px;
  font-weight: 500;
  background-color: var(--color-accent);
  padding: 0 7px;
  border-radius: 7px;
  white-space: nowrap;
}

.section__description {
  font-size: 18px;
  line-height: 1.5;
  max-width: 580px;
}
</style>
