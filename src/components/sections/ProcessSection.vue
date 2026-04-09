<script setup lang="ts">
import BaseSection from "@/components/layout/BaseSection.vue";
import BaseAccordion from "@/components/base/BaseAccordion.vue";
import type { Step } from "@/types/index";

const base = import.meta.env.BASE_URL;

const steps: Step[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "We conduct in-depth research to understand your industry, competitors, and target audience. Based on our findings, we develop a customized strategy aligned with your specific goals and budget.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Our team puts the agreed-upon strategy into action using the latest tools and best practices. We ensure every aspect of the campaign is executed to the highest standard for maximum impact.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "We continuously track campaign performance and make data-driven adjustments to optimize results. Regular analysis ensures your marketing efforts are always delivering at their best.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "We provide detailed reports covering key metrics, insights, and recommendations. Regular communication keeps you fully informed and involved at every stage of the process.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "Our commitment to excellence drives us to constantly refine and enhance your marketing strategy. We stay ahead of industry trends to keep your campaigns effective and competitive.",
  },
];
</script>

<template>
  <BaseSection
    title="Our Working Process"
    description="Step-by-Step Guide to Achieving Your Business Goals"
    descriptionWidth="300px"
  >
    <BaseAccordion :items="steps" class="process">
      <template #header="{ item, isOpen }">
        <div class="process__label">
          <span class="process__number">{{ item.number }}</span>
          <span class="process__title">{{ item.title }}</span>
        </div>
        <span class="process__toggle" aria-hidden="true">
          <img
            v-if="isOpen"
            :src="base + 'icons/icon-minus.svg'"
            alt=""
            width="25.08"
            height="4.5"
          />
          <img
            v-else
            :src="base + 'icons/icon-plus.svg'"
            alt=""
            width="25.08"
            height="25.08"
          />
        </span>
      </template>
      <template #body="{ item }">
        <hr class="process__divider" />
        <p class="process__description">{{ item.description }}</p>
      </template>
    </BaseAccordion>
  </BaseSection>
</template>

<style lang="scss" scoped>
.process {
  gap: 30px;

  :deep(.accordion__item) {
    background-color: $color-card;
    border: 1px solid $color-dark;
    border-radius: 45px;
    padding: $card-padding;
    transition: background-color 0.2s;
  }

  :deep(.accordion__item--open) {
    background-color: $color-accent;
  }

  :deep(.accordion__trigger) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  :deep(.accordion__item--open) .process__toggle {
    background-color: $color-white;
    margin-bottom: 10px;
  }

  &__label {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  &__number {
    font-size: $text-5xl;
    font-weight: 500;
    line-height: 1;
  }

  &__title {
    font-size: $text-3xl;
    font-weight: 500;
  }

  &__toggle {
    flex-shrink: 0;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 1px solid $color-dark;
    background-color: $color-card;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    transition: margin-bottom 0.3s ease, background-color 0.3s ease;
  }

  &__body {
    margin-top: 30px;
  }

  &__divider {
    border: none;
    border-top: 1px solid $color-dark;
    margin-bottom: 30px;
  }

  &__description {
    font-size: $text-lg;
    line-height: 1.5;
  }
}
</style>
