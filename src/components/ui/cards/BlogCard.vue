<script setup>
defineProps({
  category: String,
  date: String,
  title: String,
  description: String,
  author: Object,
  href: { type: String, default: "#" },
});
</script>

<template>
  <article class="blog-card">
    <div class="blog-card__meta">
      <span class="blog-card__category">
        <span class="blog-card__category-dot" aria-hidden="true" />
        {{ category }}
      </span>
      <time class="blog-card__date">{{ date }}</time>
    </div>

    <h2 class="blog-card__title">{{ title }}</h2>
    <p class="blog-card__description">{{ description }}</p>

    <div class="blog-card__footer">
      <div class="blog-card__author">
        <img
          :src="author.avatar"
          :alt="author.name"
          class="blog-card__avatar"
          width="40"
          height="40"
        />
        <span class="blog-card__author-name">{{ author.name }}</span>
      </div>
      <a :href="href" class="blog-card__read-more">
        Read more
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 10H16M16 10L11 5M16 10L11 15"
            stroke="#191A23"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.blog-card {
  @include flex-column(16px);
  @include card-border($radius-lg);
  padding: $card-padding;
  background-color: $color-white;

  &__meta {
    @include flex-between;
  }

  &__category {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background-color: $color-accent;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: $text-sm;
    font-weight: 500;
  }

  &__category-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $color-dark;
    flex-shrink: 0;
  }

  &__date {
    font-size: $text-sm;
    color: $color-text-light;
  }

  &__title {
    font-size: $text-2xl;
    font-weight: 700;
    line-height: 1.3;
  }

  &__description {
    font-size: $text-base;
    line-height: 1.6;
    color: $color-text;
    flex: 1;
  }

  &__footer {
    @include flex-between;
    margin-top: 8px;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__avatar {
    border-radius: 50%;
    object-fit: cover;
  }

  &__author-name {
    font-size: $text-base;
    font-weight: 600;
  }

  &__read-more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: $text-base;
    font-weight: 600;
    text-decoration: none;
    color: $color-dark;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
