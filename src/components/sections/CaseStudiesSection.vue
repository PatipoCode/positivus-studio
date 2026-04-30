<script setup lang="ts">
import BaseSection from '@/components/layout/BaseSection.vue';
import CaseStudyCard from '@/components/ui/cards/CaseStudyCard.vue';
import type { Case } from '@/types/index';

const cases: Case[] = [
  {
    title: 'Local Restaurant PPC Campaign',
    description:
      'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    client: 'Bella Cucina Restaurant',
    service: 'Pay-Per-Click Advertising',
    metrics: [
      { label: 'Website Traffic', value: '+50%' },
      { label: 'Sales Increase', value: '+25%' },
      { label: 'Campaign Duration', value: '3 months' },
    ],
    details:
      'We identified high-intent local keywords, created geo-targeted ad campaigns, and optimized landing pages for conversions. A/B testing on ad copy improved click-through rates by 35%.',
  },
  {
    title: 'B2B Software SEO Strategy',
    description:
      'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
    client: 'CloudSync Solutions',
    service: 'Search Engine Optimization',
    metrics: [
      { label: 'Organic Traffic', value: '+200%' },
      { label: 'Keyword Rankings', value: 'Page 1' },
      { label: 'Lead Generation', value: '+150%' },
    ],
    details:
      'We conducted a comprehensive technical SEO audit, built a content strategy around high-value keywords, and implemented a link-building campaign targeting industry publications.',
  },
  {
    title: 'Retail Chain Social Media Campaign',
    description:
      'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
    client: 'TrendMart Retail',
    service: 'Social Media Marketing',
    metrics: [
      { label: 'Followers Growth', value: '+25%' },
      { label: 'Online Sales', value: '+20%' },
      { label: 'Engagement Rate', value: '+40%' },
    ],
    details:
      'We developed a multi-platform content calendar, partnered with micro-influencers, and ran targeted paid social campaigns with dynamic product ads.',
  },
];
</script>

<template>
  <BaseSection
    id="use-cases"
    title="Case Studies"
    description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
  >
    <div class="cases">
      <CaseStudyCard
        v-for="(caseStudy, index) in cases"
        :key="index"
        :title="caseStudy.title"
        :description="caseStudy.description"
        :client="caseStudy.client"
        :service="caseStudy.service"
        :metrics="caseStudy.metrics"
        :details="caseStudy.details"
      />
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.cases {
  background-color: $color-dark;
  border-radius: 45px;
  padding: clamp(40px, 5vw, 70px) clamp(28px, 4vw, 60px);
  display: flex;
  align-items: stretch;

  @media (max-width: 880px) {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
