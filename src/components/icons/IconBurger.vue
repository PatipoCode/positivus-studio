<script setup>
defineProps({
  open: { type: Boolean, default: false },
  size: { type: Number, default: 28 },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line
      class="line line--top"
      :class="{ 'line--open': open }"
      x1="4"
      y1="7"
      x2="24"
      y2="7"
      stroke="#191A23"
      stroke-width="2"
      stroke-linecap="round"
    />
    <line
      class="line line--mid"
      :class="{ 'line--open': open }"
      x1="4"
      y1="14"
      x2="24"
      y2="14"
      stroke="#191A23"
      stroke-width="2"
      stroke-linecap="round"
    />
    <line
      class="line line--bot"
      :class="{ 'line--open': open }"
      x1="4"
      y1="21"
      x2="24"
      y2="21"
      stroke="#191A23"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<style scoped>
.line {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  transform-origin: center;
}

.line--top.line--open {
  transform: translateY(7px) rotate(45deg);
}

.line--mid.line--open {
  opacity: 0;
  transform: scaleX(0);
}

.line--bot.line--open {
  transform: translateY(-7px) rotate(-45deg);
}
</style>
