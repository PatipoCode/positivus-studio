<script setup>
defineProps({
  label: String,
  htmlFor: String,
});
</script>

<template>
  <div class="form-field">
    <label v-if="label" class="form-field__label" :for="htmlFor">{{ label }}</label>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;

  &__label {
    font-size: $text-base;
  }
}
</style>
