<script setup>
import ServiceCard from "./cards/ServiceCard.vue";
import CtaBanner from "./CtaBanner.vue";

const base = import.meta.env.BASE_URL;

const services = [
  {
    title: "Search engine optimization",
    slug: "seo",
    image: base + "services/image-service-seo.png",
    variant: "light",
  },
  {
    title: "Pay-per-click advertising",
    slug: "ppc",
    image: base + "services/image-service-ppc.png",
    variant: "accent",
  },
  {
    title: "Social Media Marketing",
    slug: "smm",
    image: base + "services/image-service-smm.png",
    variant: "dark",
  },
  {
    title: "Email Marketing",
    slug: "email-marketing",
    image: base + "services/image-service-email-marketing.png",
    variant: "light",
  },
  {
    title: "Content Creation",
    slug: "content-creation",
    image: base + "services/image-service-content-creation.png",
    variant: "accent",
  },
  {
    title: "Analytics and Tracking",
    slug: "analytics",
    image: base + "services/image-service-analytics.png",
    variant: "dark",
  },
];
</script>

<template>
  <ul class="services__list">
    <li v-for="service in services" :key="service.title" class="services__item">
      <ServiceCard
        :title="service.title"
        :variant="service.variant"
        :image="service.image"
        :href="`/services/${service.slug}`"
      />
    </li>
  </ul>
  <CtaBanner />
</template>

<style lang="scss" scoped>
.services__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
}
</style>
