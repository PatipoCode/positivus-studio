<script setup>
import BaseModal from "../../base/BaseModal.vue";

defineProps({
  title: String,
  description: String,
  client: String,
  service: String,
  metrics: Array,
  details: String,
});

const model = defineModel({ type: Boolean });
</script>

<template>
  <BaseModal v-model="model" :title="title">
    <div class="case-detail">
      <div class="case-detail__info">
        <span v-if="client" class="case-detail__tag">{{ client }}</span>
        <span
          v-if="service"
          class="case-detail__tag case-detail__tag--accent"
          >{{ service }}</span
        >
      </div>

      <p class="case-detail__description">{{ description }}</p>

      <div v-if="metrics" class="case-detail__metrics">
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="case-detail__metric"
        >
          <span class="case-detail__metric-value">{{ metric.value }}</span>
          <span class="case-detail__metric-label">{{ metric.label }}</span>
        </div>
      </div>

      <p v-if="details" class="case-detail__text">{{ details }}</p>
    </div>
  </BaseModal>
</template>

<style lang="scss" scoped>
.case-detail {
  @include flex-column(24px);

  &__info {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__tag {
    font-size: $text-sm;
    font-weight: 500;
    padding: 6px 14px;
    border-radius: $radius-sm;
    background-color: $color-card;
    color: $color-dark;
  }

  &__tag--accent {
    background-color: $color-accent;
  }

  &__description {
    font-size: $text-lg;
    line-height: 1.6;
  }

  &__metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    @media (max-width: $bp-sm) {
      grid-template-columns: 1fr;
    }
  }

  &__metric {
    @include flex-column(4px);
    align-items: center;
    text-align: center;
    padding: 10px;
    background-color: $color-card;
    border-radius: $radius-md;
  }

  &__metric-value {
    font-size: 20px;
    font-weight: 700;
    color: $color-dark;
  }

  &__metric-label {
    font-size: $text-sm;
    color: $color-text-muted;
  }

  &__text {
    font-size: $text-base;
    line-height: 1.7;
    color: $color-text-subtle;
  }
}
</style>
