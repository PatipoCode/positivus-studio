<script setup lang="ts">
import HeroSection from "../components/sections/HeroSection.vue";
import ServicesSection from "../components/sections/ServicesSection.vue";
import CaseSection from "../components/sections/CaseStudiesSection.vue";
import ProcessSection from "../components/sections/ProcessSection.vue";
import TeamSection from "../components/sections/TeamSection.vue";
import TestimonialsSection from "../components/sections/TestimonialsSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
</script>

<template>
  <HeroSection />
  <ServicesSection />
  <CaseSection />
  <ProcessSection />
  <TeamSection />
  <TestimonialsSection v-if="false" />
  <ContactSection />
</template>
