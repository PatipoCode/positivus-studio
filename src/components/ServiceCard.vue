<script setup>
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
        <svg
          class="card__link-icon"
          aria-hidden="true"
          viewBox="0 0 41 41"
          width="41"
          height="41"
        >
          <circle
            cx="20.5"
            cy="20.5"
            r="20.5"
            :fill="variant === 'dark' ? '#fff' : '#191A23'"
          />
          <path
            :fill="variant === 'dark' ? '#191A23' : '#B9FF66'"
            d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
          />
        </svg>
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
</style>
