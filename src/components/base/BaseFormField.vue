<script setup lang="ts">
defineProps({
  label: String,
  htmlFor: String,
  required: { type: Boolean, default: false },
});
</script>

<template>
  <div class="form-field">
    <label v-if="label" class="form-field__label" :for="htmlFor">
      {{ label }}<span v-if="required" class="form-field__required">*</span>
    </label>
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

  &__required {
    color: $color-error;
    margin-left: 2px;
  }
}
</style>
