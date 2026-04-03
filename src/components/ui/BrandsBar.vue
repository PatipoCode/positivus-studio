<script setup>
import AppContainer from "../layout/AppContainer.vue";

const brands = [
  { name: "Amazon", src: "/brands/amazon.png" },
  { name: "Dribbble", src: "/brands/dribbble.png" },
  { name: "HubSpot", src: "/brands/hubspot.png" },
  { name: "Notion", src: "/brands/notion.png" },
  { name: "Netflix", src: "/brands/netflix.png" },
  { name: "Zoom", src: "/brands/zoom.png" },
];
</script>

<template>
  <AppContainer>
    <ul class="brands__list" aria-label="Our clients">
      <li v-for="brand in brands" :key="brand.name" class="brands__item">
        <img
          :src="brand.src"
          :alt="`${brand.name} logo`"
          height="36"
          width="128"
        />
      </li>
    </ul>
  </AppContainer>
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
