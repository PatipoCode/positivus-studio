<script setup>
import BaseButton from "./BaseButton.vue";
import AppContainer from "./AppContainer.vue";

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
  <section class="hero" aria-label="Hero">
    <AppContainer class="hero__content">
      <div class="hero__text">
        <h1 class="hero__title">
          Navigating the digital landscape for success
        </h1>
        <p class="hero__description">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <BaseButton>Book a consultation</BaseButton>
      </div>
      <img
        src="/hero-illustration.png"
        alt="Digital marketing illustration"
        class="hero__illustration"
        aria-hidden="true"
      />
    </AppContainer>

    <AppContainer class="hero__brands">
      <ul class="hero__brands-list" aria-label="Our clients">
        <li v-for="brand in brands" :key="brand.name" class="hero__brands-item">
          <img
            :src="brand.src"
            :alt="`${brand.name} logo`"
            height="36"
            width="128"
          />
        </li>
      </ul>
    </AppContainer>
  </section>
</template>

<style scoped>
.hero {
  background-color: #fff;
}

.hero__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 70px;
  padding-bottom: 70px;
}

.hero__text {
  width: 531px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.hero__title {
  font-size: 60px;
  font-weight: 500;
  line-height: 1.15;
}

.hero__description {
  font-size: 20px;
  line-height: 1.4;
}

.hero__brands-item img {
  filter: grayscale(1);
  transition: filter 0.3s;
}

.hero__brands-item img:hover {
  filter: grayscale(0);
}

.hero__illustration {
  width: 600px;
  flex-shrink: 0;
}

.hero__brands-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
