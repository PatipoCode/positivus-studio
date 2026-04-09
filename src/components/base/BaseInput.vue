<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, default: "" },
  id: String,
  name: String,
  type: { type: String, default: "text" },
  placeholder: String,
  multiline: { type: Boolean, default: false },
  variant: { type: String, default: "dark" },
  error: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

function onInput(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<template>
  <component
    :is="multiline ? 'textarea' : 'input'"
    :type="multiline ? undefined : type"
    :value="modelValue"
    :id="id"
    :name="name || id"
    :placeholder="placeholder"
    class="input"
    :class="[`input--${variant}`, { 'input--textarea': multiline, 'input--error': error }]"
    @input="onInput"
  />
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 18px 30px;
  border-radius: 14px;
  font-size: $text-lg;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: $color-accent;
  }

  &--dark {
    border: 1px solid $color-white;
    background-color: transparent;
    color: $color-white;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px $color-dark-2 inset;
      -webkit-text-fill-color: $color-white;
    }

    &::placeholder {
      color: rgb(255 255 255 / 0.6);
    }
  }

  &--light {
    border: 1px solid $color-dark;
    background-color: $color-white;
    color: $color-dark;

    &::placeholder {
      color: rgb(25 26 35 / 0.4);
    }
  }

  &--textarea {
    resize: vertical;
    min-height: 190px;
    max-height: 400px;
    padding-top: 18px;
    line-height: 1.5;
  }

  &--error#{&}--error {
    border-color: $color-error;
  }
}
</style>
