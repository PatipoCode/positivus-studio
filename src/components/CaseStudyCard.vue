<script setup>
import IconArrow from "./IconArrow.vue";

defineProps({
  description: { type: String, required: true },
});
</script>

<template>
  <article class="case-study">
    <p class="case-study__description">{{ description }}</p>
    <a href="#" class="case-study__link">
      <span>Learn more</span>
      <IconArrow class="case-study__link-icon" />
    </a>
  </article>
</template>

<style scoped>
.case-study {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

.case-study:not(:last-child) {
  padding-right: 60px;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
}

.case-study:not(:first-child) {
  padding-left: 60px;
}

.case-study__description {
  font-size: 18px;
  line-height: 1.5;
  color: #fff;
}

.case-study__link {
  display: flex;
  align-items: center;
  gap: 15px;
  color: var(--color-accent);
  font-size: 20px;
  transition: opacity 0.2s;
}

.case-study__link:hover {
  opacity: 0.7;
}

.case-study__link-icon {
  transition: transform 0.3s;
}

.case-study__link:hover .case-study__link-icon {
  transform: rotate(30deg);
}
</style>
