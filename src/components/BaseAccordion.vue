<script setup>
import { ref } from "vue";

const props = defineProps({
  items: { type: Array, required: true },
  defaultOpen: { type: Number, default: 0 },
});

const activeItemIndex = ref(props.defaultOpen);
</script>

<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion__item"
      :class="{ 'accordion__item--open': activeItemIndex === index }"
    >
      <button class="accordion__trigger" @click="activeItemIndex = activeItemIndex === index ? null : index">
        <slot name="header" :item="item" :index="index" :is-open="activeItemIndex === index" />
      </button>
      <Transition name="accordion">
        <div v-show="activeItemIndex === index" class="accordion__body">
          <slot name="body" :item="item" :index="index" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  display: flex;
  flex-direction: column;
}

.accordion__trigger {
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.35s ease, opacity 0.35s ease;
  overflow: hidden;
  max-height: 300px;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
