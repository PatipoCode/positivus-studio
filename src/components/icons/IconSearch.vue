<script setup lang="ts">
import type { IconProps } from "@/types/index";

interface Props extends IconProps {
  color?: string;
}

withDefaults(defineProps<Props>(), {
  size: 20,
  color: "#fff",
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8.5" cy="8.5" r="7.5" :stroke="color" stroke-width="1.8" />
    <path
      d="M14 14L19 19"
      :stroke="color"
      stroke-width="1.8"
      stroke-linecap="round"
    />
  </svg>
</template>
