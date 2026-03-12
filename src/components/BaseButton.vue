<script setup>
defineProps({
  variant: { type: String, default: "dark" },
});
</script>

<template>
  <button :class="['button', `button--${variant}`]">
    <slot />
  </button>
</template>

<style scoped>
.button {
  width: fit-content;
  border-radius: 14px;
  padding: 20px 35px;
  font-size: 20px;
  line-height: 1;
  white-space: nowrap;
  transition: all 0.2s;
  cursor: pointer;
  border: 1px solid transparent;
}

.button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.button--dark {
  background-color: var(--color-dark);
  color: #fff;
}
.button--dark:hover {
  opacity: 0.9;
}

.button--outline {
  background-color: transparent;
  border-color: #000;
  color: #000;
}
.button--outline:hover {
  background-color: #000;
  color: #fff;
}

.button--accent {
  background-color: var(--color-accent);
  color: #000;
  font-weight: 500;
}
.button--accent:hover {
  opacity: 0.9;
}
</style>
