<script setup lang="ts">
interface RadioOption {
  label: string;
  value: string;
}

defineProps<{
  options: RadioOption[];
  name: string;
}>();

const model = defineModel();
</script>

<template>
  <div class="radio-group">
    <label
      v-for="option in options"
      :key="option.value"
      class="radio-group__option"
    >
      <input
        type="radio"
        :name="name"
        :value="option.value"
        v-model="model"
        class="radio-group__input"
      />
      <span class="radio-group__label">{{ option.label }}</span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.radio-group {
  display: flex;
  gap: 35px;

  &__option {
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
  }

  &__input {
    appearance: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid $color-dark;
    background-color: $color-white;
    cursor: pointer;
    position: relative;
    flex-shrink: 0;

    &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: $color-accent;
    }
  }

  &__label {
    font-size: $text-lg;
  }
}
</style>
