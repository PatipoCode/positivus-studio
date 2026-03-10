<script setup>
import AppSection from "./AppSection.vue";
import ServiceCard from "./ServiceCard.vue";

const services = [
  {
    title: "Search engine optimization",
    image: "/services/image-service-seo.png",
    variant: "light",
  },
  {
    title: "Pay-per-click advertising",
    image: "/services/image-service-ppc.png",
    variant: "accent",
  },
  {
    title: "Social Media Marketing",
    image: "/services/image-service-smm.png",
    variant: "dark",
  },
  {
    title: "Email Marketing",
    image: "/services/image-service-email-marketing.png",
    variant: "light",
  },
  {
    title: "Content Creation",
    image: "/services/image-service-content-creation.png",
    variant: "accent",
  },
  {
    title: "Analytics and Tracking",
    image: "/services/image-service-analytics.png",
    variant: "dark",
  },
];
</script>

<template>
  <AppSection
    title="Services"
    description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
  >
    <ul class="services__list">
      <li
        v-for="service in services"
        :key="service.title"
        class="services__item"
      >
        <ServiceCard
          :title="service.title"
          :variant="service.variant"
          :image="service.image"
        />
      </li>
    </ul>
  </AppSection>
</template>

<style scoped>
.services__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}
</style>
