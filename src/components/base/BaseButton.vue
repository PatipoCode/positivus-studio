<script setup>
defineProps({
  variant: { type: String, default: "dark" },
  type: { type: String, default: "button" },
});
</script>

<template>
  <button :type="type" :class="['button', `button--${variant}`]">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  width: fit-content;
  border-radius: 14px;
  padding: 20px 35px;
  font-size: $text-xl;
  line-height: 1;
  white-space: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  border: 1px solid transparent;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &--dark {
    background-color: var(--color-dark);
    color: #fff;

    &:hover {
      opacity: 0.9;
    }
  }

  &--outline {
    background-color: transparent;
    border-color: #000;
    color: #000;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }

  &--accent {
    background-color: var(--color-accent);
    color: #000;
    font-weight: 500;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
