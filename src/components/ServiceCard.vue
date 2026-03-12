<script setup>
import IconArrow from "./IconArrow.vue";

defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
  variant: {
    type: String,
    default: "light",
  },
});
</script>

<template>
  <article :class="['card', `card--${variant}`]">
    <div class="card__body">
      <h3 class="card__title">
        <span class="card__title-text">{{ title }}</span>
      </h3>

      <a href="#" class="card__link" :aria-label="`Learn more about ${title}`">
        <IconArrow
          class="card__link-icon"
          :circle-fill="variant === 'dark' ? '#fff' : '#191A23'"
          :arrow-fill="variant === 'dark' ? '#191A23' : '#B9FF66'"
        />
        <span>Learn more</span>
      </a>
    </div>
    <img :src="image" :alt="title" class="card__image" aria-hidden="true" />
  </article>
</template>

<style scoped>
.card {
  border-radius: 45px;
  border: 1px solid var(--color-dark);
  box-shadow: 0 5px 0 0 #191a23;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  height: 310px;
}

.card__body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 220px;
}

.card--light {
  background-color: var(--color-card);
}

.card--accent {
  background-color: var(--color-accent);
}

.card--dark {
  background-color: var(--color-dark);
  color: #fff;
}

.card__title {
  font-size: 28px;
  font-weight: 500;
}

.card__title-text {
  background-color: var(--color-accent);
  display: inline;
  padding: 5px 7px;
  border-radius: 7px;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  line-height: 1.3;
}

.card--accent .card__title-text {
  background-color: #fff;
}

.card--dark .card__title-text {
  background-color: var(--color-accent);
}

.card__image {
  width: fit-content;
  max-width: 210px;
  height: fit-content;
}

.card__link {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  transition: opacity 0.2s;
}

.card__link:hover {
  opacity: 0.7;
}

.card__link-icon {
  transition: transform 0.3s;
}

.card__link:hover .card__link-icon {
  transform: rotate(30deg);
}
</style>
