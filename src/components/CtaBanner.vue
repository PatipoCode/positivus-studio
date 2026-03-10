<script setup>
import BaseButton from "./BaseButton.vue";
</script>

<template>
  <div class="cta" aria-label="Call to action">
    <div class="cta__content">
      <h3 class="cta__title">Let's make things happen</h3>
      <p class="cta__description">
        Contact us today to learn more about how our digital marketing services
        can help your business grow and succeed online.
      </p>
      <BaseButton>Get your free proposal!</BaseButton>
    </div>
    <img
      src="/public/cta-Illustration.png"
      alt=""
      class="cta__image"
      aria-hidden="true"
    />
  </div>
</template>

<style scoped>
.cta {
  height: 347px;
  background-color: var(--color-card);
  border-radius: 45px;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-top: 123.5px;
}

.cta__content {
  display: flex;
  flex-direction: column;
  gap: 26px;
  max-width: 500px;
}

.cta__title {
  font-size: 30px;
  font-weight: 500;
}

.cta__description {
  font-size: 18px;
  line-height: 1.5;
}

.cta__image {
  width: 360px;
  flex-shrink: 0;
}
</style>
