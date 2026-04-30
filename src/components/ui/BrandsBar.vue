<script setup lang="ts">
import BaseContainer from '@/components/layout/BaseContainer.vue';
import type { Brand } from '@/types/index';

const base = import.meta.env.BASE_URL;

const brands: Brand[] = [
  { name: 'Amazon', src: base + 'brands/amazon.png' },
  { name: 'Dribbble', src: base + 'brands/dribbble.png' },
  { name: 'HubSpot', src: base + 'brands/hubspot.png' },
  { name: 'Notion', src: base + 'brands/notion.png' },
  { name: 'Netflix', src: base + 'brands/netflix.png' },
  { name: 'Zoom', src: base + 'brands/zoom.png' },
];
</script>

<template>
  <BaseContainer>
    <ul class="brands__list" aria-label="Our clients">
      <li v-for="brand in brands" :key="brand.name" class="brands__item">
        <img :src="brand.src" :alt="`${brand.name} logo`" height="36" width="128" />
      </li>
    </ul>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.brands {
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-top: 30px;

    @media (max-width: 920px) {
      flex-wrap: wrap;
    }

    @media (max-width: 800px) {
      justify-content: center;
    }
  }

  &__item img {
    width: fluid(80px, 128px, 9vw);
    height: auto;
    filter: grayscale(1);
    transition: filter 0.3s;

    &:hover {
      filter: grayscale(0);
    }

    @media (max-width: 920px) {
      width: 80px;
    }
  }
}
</style>
