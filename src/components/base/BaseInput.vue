<script setup>
defineProps({
  type: { type: String, default: "text" },
  placeholder: String,
  multiline: { type: Boolean, default: false },
  variant: { type: String, default: "dark" },
});

const model = defineModel({ default: "" });
</script>

<template>
  <component
    :is="multiline ? 'textarea' : 'input'"
    v-bind="multiline ? {} : { type }"
    v-model="model"
    :placeholder="placeholder"
    class="input"
    :class="[`input--${variant}`, { 'input--textarea': multiline }]"
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
    border-color: var(--color-accent);
  }


  &--dark {
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px var(--color-dark-2) inset;
      -webkit-text-fill-color: #fff;
    }

    &::placeholder {
      color: rgb(255 255 255 / 0.6);
    }
  }

  &--light {
    border: 1px solid var(--color-dark);
    background-color: #fff;
    color: var(--color-dark);

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
}
</style>
