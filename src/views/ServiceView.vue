<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import BaseContainer from "../components/layout/BaseContainer.vue";
import UnderConstruction from "../components/ui/UnderConstruction.vue";

const route = useRoute();

const services = {
  seo: {
    title: "Search Engine Optimization",
    image: "/services/image-service-seo.png",
  },
  ppc: {
    title: "Pay-Per-Click Advertising",
    image: "/services/image-service-ppc.png",
  },
  smm: {
    title: "Social Media Marketing",
    image: "/services/image-service-smm.png",
  },
  "email-marketing": {
    title: "Email Marketing",
    image: "/services/image-service-email-marketing.png",
  },
  "content-creation": {
    title: "Content Creation",
    image: "/services/image-service-content-creation.png",
  },
  analytics: {
    title: "Analytics and Tracking",
    image: "/services/image-service-analytics.png",
  },
};

const service = computed(() => services[route.params.slug]);
</script>

<template>
  <main v-if="service" class="service">
    <BaseContainer>
      <div class="service__header">
        <h1 class="service__title">{{ service.title }}</h1>
      </div>
      <UnderConstruction
        :title="`${service.title}`"
        message="Full service page is coming soon. Stay tuned!"
      />
    </BaseContainer>
  </main>
</template>

<style lang="scss" scoped>
.service {
  padding: $section-padding;

  &__header {
    margin-bottom: 40px;
  }

  &__title {
    font-size: $text-5xl;
    font-weight: 700;
  }
}
</style>
