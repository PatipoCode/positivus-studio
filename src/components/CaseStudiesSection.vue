<script setup>
import AppSection from "./AppSection.vue";
import CaseStudyCard from "./CaseStudyCard.vue";

const cases = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];
</script>

<template>
  <AppSection
    title="Case Studies"
    description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
  >
    <div class="cases">
      <CaseStudyCard
        v-for="(item, index) in cases"
        :key="index"
        :description="item.description"
      />
    </div>
  </AppSection>
</template>

<style scoped>
.cases {
  background-color: var(--color-dark);
  border-radius: 45px;
  padding: 70px 60px;
  display: flex;
  align-items: center;
}
</style>
