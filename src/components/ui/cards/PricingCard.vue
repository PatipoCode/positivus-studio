<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";
import IconCheck from "@/components/icons/IconCheck.vue";
import type { PricingCard } from "@/types/index";

defineProps<PricingCard>();
</script>

<template>
  <div class="pricing-card">
    <div class="pricing-card__header">
      <h3 class="pricing-card__name">{{ name }}</h3>
      <p class="pricing-card__description">{{ description }}</p>
    </div>

    <div class="pricing-card__price">
      <span class="pricing-card__amount">${{ price }}</span>
      <span class="pricing-card__period">/month</span>
    </div>

    <ul class="pricing-card__features">
      <li
        v-for="feature in features"
        :key="feature.label"
        class="pricing-card__feature"
      >
        <IconCheck class="pricing-card__check" />
        <span
          >{{ feature.label }}
          <strong v-if="feature.value">{{ feature.value }}</strong></span
        >
      </li>
    </ul>

    <BaseButton variant="accent" class="pricing-card__btn"
      >Get Started</BaseButton
    >
  </div>
</template>

<style lang="scss" scoped>
.pricing-card {
  @include flex-column(32px);
  @include card-border($radius-xl);
  padding: $card-padding;

  &__header {
    text-align: center;
  }

  &__name {
    font-size: $text-2xl;
    font-weight: 700;
    margin-bottom: 12px;
  }

  &__description {
    font-size: $text-base;
    line-height: 1.5;
    color: $color-text;
  }

  &__price {
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 6px;
  }

  &__amount {
    font-size: $text-4xl;
    font-weight: 700;
    line-height: 1;
  }

  &__period {
    font-size: $text-base;
    color: $color-text-light;
  }

  &__features {
    @include flex-column(14px);
    flex: 1;
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: $text-base;
  }

  &__check {
    font-size: $text-base;
    color: $color-dark;
    flex-shrink: 0;
  }

  &__btn {
    width: 100%;
    text-align: center;
  }
}
</style>
