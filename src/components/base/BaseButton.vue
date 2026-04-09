<script setup lang="ts">
withDefaults(defineProps<{
  variant?: string;
  type?: "button" | "submit" | "reset";
}>(), {
  variant: "dark",
  type: "button",
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
    background-color: $color-dark;
    color: $color-white;

    &:hover {
      opacity: 0.9;
    }
  }

  &--outline {
    background-color: transparent;
    border-color: $color-black;
    color: $color-black;

    &:hover {
      background-color: $color-black;
      color: $color-white;
    }
  }

  &--accent {
    background-color: $color-accent;
    color: $color-black;
    font-weight: 500;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
