<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import ScrollToTop from '@/components/ui/ScrollToTop.vue';
</script>

<template>
  <AppHeader />
  <div class="app-content">
    <RouterView />
  </div>
  <AppFooter />
  <ScrollToTop />
</template>

<style scoped>
.app-content {
  flex: 1;
}
</style>
