<script setup>
import AppHeader from "./components/AppHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import CaseSection from "./components/CaseStudiesSection.vue";
import ProcessSection from "./components/ProcessSection.vue";
import TeamSection from "./components/TeamSection.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <AppHeader />

  <main>
    <HeroSection />
    <ServicesSection />
    <CaseSection />
    <ProcessSection />
    <TeamSection />
    <TestimonialsSection />
    <ContactSection />
  </main>

  <AppFooter />
</template>
