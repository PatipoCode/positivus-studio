<script setup lang="ts">
import type { IconProps } from '@/types/index';

withDefaults(defineProps<IconProps>(), {
  size: 24,
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 12.5L9.5 18L20 7"
      stroke="#191A23"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
