<script setup lang="ts">
import BaseContainer from '../components/layout/BaseContainer.vue';
import PricingCard from '../components/ui/cards/PricingCard.vue';
import UnderConstruction from '../components/ui/UnderConstruction.vue';

const plans = [
  {
    name: 'Starter',
    description: 'Best option for personal use & for your next project',
    price: 29,
    features: [
      { label: 'Individual configuration' },
      { label: 'No setup, or hidden fees' },
      { label: 'Team size:', value: '1 developer' },
      { label: 'Premium support:', value: '6 months' },
      { label: 'Free updates:', value: '6 months' },
    ],
  },
  {
    name: 'Company',
    description: 'Relevant for multiple users, extended & premium support',
    price: 99,
    features: [
      { label: 'Individual configuration' },
      { label: 'No setup, or hidden fees' },
      { label: 'Team size:', value: '10 developers' },
      { label: 'Premium support:', value: '24 months' },
      { label: 'Free updates:', value: '24 months' },
    ],
  },
  {
    name: 'Enterprise',
    description: 'Best for large scale uses and extended redistribution rights',
    price: 499,
    features: [
      { label: 'Individual configuration' },
      { label: 'No setup, or hidden fees' },
      { label: 'Team size:', value: '100+ developers' },
      { label: 'Premium support:', value: '36 months' },
      { label: 'Free updates:', value: '36 months' },
    ],
  },
];
</script>

<template>
  <main>
    <BaseContainer v-if="false">
      <div class="pricing">
        <div class="pricing__header">
          <h1 class="pricing__title">Designed for business teams like yours</h1>
          <p class="pricing__subtitle">
            Here at Positivus we focus on markets where technology, innovation, and capital can
            unlock long-term value and drive economic growth.
          </p>
        </div>
        <div class="pricing__grid">
          <PricingCard
            v-for="plan in plans"
            :key="plan.name"
            :name="plan.name"
            :description="plan.description"
            :price="plan.price"
            :features="plan.features"
          />
        </div>
      </div>
    </BaseContainer>
    <BaseContainer>
      <UnderConstruction />
    </BaseContainer>
  </main>
</template>

<style lang="scss" scoped>
.pricing {
  padding: $section-padding;

  &__header {
    text-align: center;
    margin-bottom: 60px;
  }

  &__title {
    font-size: $text-3xl;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__subtitle {
    font-size: $text-lg;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    color: $color-text-subtle;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}
</style>
