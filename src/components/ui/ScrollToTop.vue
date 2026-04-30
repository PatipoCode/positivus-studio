<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import IconArrow from '@/components/icons/IconArrow.vue';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <Transition name="scroll-to-top">
    <button
      v-if="isVisible"
      type="button"
      class="scroll-to-top"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <IconArrow :size="28" arrow-fill="#fff" class="scroll-to-top__icon" />
    </button>
  </Transition>
</template>

<style lang="scss" scoped>
.scroll-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: $color-dark-2;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 90;
  transition:
    opacity 0.2s,
    background-color 0.2s;

  &__icon {
    transform: rotate(-60deg);
    transition: transform 0.2s;
  }

  &:hover {
    background-color: $color-accent;

    .scroll-to-top__icon {
      :deep(path) {
        fill: $color-dark;
      }
    }
  }

  @media (max-width: $bp-sm) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}

.scroll-to-top-enter-active,
.scroll-to-top-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.scroll-to-top-enter-from,
.scroll-to-top-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
