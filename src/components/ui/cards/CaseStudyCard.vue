<script setup lang="ts">
import { ref } from 'vue';
import IconArrow from '@/components/icons/IconArrow.vue';
import CaseStudyModal from '@/components/ui/modals/CaseStudyModal.vue';
import type { Case } from '@/types/index';

const props = defineProps<Case>();

const isModalOpen = ref(false);
</script>

<template>
  <article class="case-study">
    <p class="case-study__description">{{ description }}</p>
    <button type="button" class="case-study__link" @click="isModalOpen = true">
      <span>Learn more</span>
      <IconArrow class="case-study__link-icon" />
    </button>

    <CaseStudyModal
      v-model="isModalOpen"
      :title="title"
      :description="description"
      :client="client"
      :service="service"
      :metrics="metrics"
      :details="details"
    />
  </article>
</template>

<style lang="scss" scoped>
.case-study {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  &:not(:last-child) {
    padding-right: 60px;
    border-right: 1px solid rgba(255, 255, 255, 0.3);

    @media (max-width: 880px) {
      padding-right: 0;
      border-right: none;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
  }

  &:not(:first-child) {
    padding-left: 60px;

    @media (max-width: 880px) {
      padding-left: 0;
    }
  }

  &__description {
    font-size: $text-lg;
    line-height: 1.5;
    color: $color-white;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 15px;
    color: $color-accent;
    font-size: $text-xl;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;

      .case-study__link-icon {
        transform: rotate(30deg);
      }
    }

    @media (max-width: 880px) {
      justify-content: flex-end;
    }
  }

  &__link-icon {
    transition: transform 0.3s;
  }
}
</style>
