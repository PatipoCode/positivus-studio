<script setup lang="ts">
import type { IconProps } from '@/types/index';

withDefaults(defineProps<IconProps>(), {
  size: 48,
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <!-- Large gear -->
    <path
      d="M20 8.5L21.5 12.5C22.3 12.2 23.1 12 24 12C24.9 12 25.7 12.2 26.5 12.5L28 8.5H20Z
         M35.5 14L32.5 17C33.3 18 33.8 19.2 34 20.5L38 21V29L34 29.5C33.8 30.8 33.3 32 32.5 33L35.5 36L30 41.5L27 38.5C26 39.2 24.8 39.7 23.5 39.9L23 44H15L14.5 39.9C13.2 39.7 12 39.2 11 38.5L8 41.5L2.5 36L5.5 33C4.7 32 4.2 30.8 4 29.5L0 29V21L4 20.5C4.2 19.2 4.7 18 5.5 17L2.5 14L8 8.5L11 11.5C12 10.8 13.2 10.3 14.5 10.1L15 6H23L23.5 10.1C24.8 10.3 26 10.8 27 11.5L30 8.5L35.5 14Z"
      transform="translate(5, 2) scale(0.9)"
      fill="#B9FF66"
    />
    <circle cx="22" cy="24" r="6" fill="#191A23" />
    <circle cx="22" cy="24" r="3" fill="#B9FF66" />

    <!-- Small gear -->
    <path
      d="M8 3L9 5C9.5 4.8 10 4.8 10.5 5L11.5 3H8Z
         M14 4.5L12.5 6.5C13 7 13.3 7.5 13.5 8L15.5 8V11L13.5 11C13.3 11.5 13 12 12.5 12.5L14 14.5L11.5 17L9.5 15.5C9 16 8.5 16.3 8 16.5L8 18.5H5L5 16.5C4.5 16.3 4 16 3.5 15.5L1.5 17L-1 14.5L0.5 12.5C0 12 -0.3 11.5 -0.5 11L-2.5 11V8L-0.5 8C-0.3 7.5 0 7 0.5 6.5L-1 4.5L1.5 2L3.5 3.5C4 3 4.5 2.7 5 2.5L5 0.5H8L8 2.5C8.5 2.7 9 3 9.5 3.5L11.5 2L14 4.5Z"
      transform="translate(33, 28) scale(0.85)"
      fill="#191A23"
    />
    <circle cx="38.5" cy="36" r="3" fill="#B9FF66" />
    <circle cx="38.5" cy="36" r="1.2" fill="#191A23" />
  </svg>
</template>
