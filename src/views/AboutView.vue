<script setup lang="ts">
import BaseButton from "../components/base/BaseButton.vue";
import BrandsBar from "../components/ui/BrandsBar.vue";
import BaseSection from "../components/layout/BaseSection.vue";
import ServiceGrid from "../components/ui/ServiceGrid.vue";
</script>

<template>
  <main class="about">
    <h1 class="about__title">We Navigate the digital landscape for success</h1>
    <p class="about__description">
      Our digital marketing agency helps businesses grow and succeed online
      through a range of services including SEO, PPC, social media marketing,
      and content creation.
    </p>
    <a href="/#contact"
      ><BaseButton variant="dark">Book a consultation</BaseButton></a
    >
  </main>
  <BrandsBar />
  <BaseSection
    title="Services"
    description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
  >
    <ServiceGrid />
  </BaseSection>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 40px;
  max-width: 900px;
  margin: 0 auto;

  &__title {
    font-size: $text-5xl;
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 40px;
  }

  &__description {
    font-size: $text-xl;
    line-height: 1.5;
    margin-bottom: 40px;
  }
}
</style>
