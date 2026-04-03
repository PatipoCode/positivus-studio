<script setup>
defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});
</script>

<template>
  <div class="team-card">
    <div class="team-card__top">
      <div class="team-card__avatar-wrap">
        <img class="team-card__avatar" :src="image" :alt="name" />
      </div>
      <div class="team-card__info">
        <span class="team-card__name">{{ name }}</span>
        <span class="team-card__role">{{ role }}</span>
      </div>
      <a href="#" class="team-card__social" aria-label="LinkedIn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <circle cx="17" cy="17" r="17" fill="black" />
          <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66" />
          <path
            d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
            fill="#B9FF66"
          />
          <path
            d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
            fill="#B9FF66"
          />
        </svg>
      </a>
    </div>
    <hr class="team-card__divider" />
    <p class="team-card__description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.team-card {
  border: 1px solid $color-dark;
  border-radius: 45px;
  padding: $card-padding;
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-shadow: 0px 5px 0px $color-dark;

  &__top {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__avatar-wrap {
    flex-shrink: 0;
    filter: drop-shadow(4px 4px 0 $color-dark);
  }

  &__avatar {
    width: 98px;
    height: 98px;
    object-fit: cover;
    display: block;
    clip-path: path(
      "M83.8068 48.9117C116.649 86.3213 86.3213 116.649 48.9117 83.8068C11.5021 116.649 -18.8258 86.3213 14.0166 48.9117C-18.8258 11.5021 11.5021 -18.8258 48.9117 14.0166C86.3213 -18.8258 116.649 11.5021 83.8068 48.9117Z"
    );
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
  }

  &__name {
    font-size: $text-xl;
    font-weight: 500;
  }

  &__role {
    font-size: $text-lg;
    line-height: 1.3;
  }

  &__social {
    flex-shrink: 0;
    display: flex;
    align-self: flex-start;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  &__divider {
    border: none;
    border-top: 1px solid $color-dark;
  }

  &__description {
    font-size: $text-lg;
    line-height: 1.5;
  }
}
</style>
