<script setup>
defineProps({
  type: { type: String, default: "text" },
  placeholder: String,
  multiline: { type: Boolean, default: false },
  variant: { type: String, default: "dark" },
});
</script>

<template>
  <component
    :is="multiline ? 'textarea' : 'input'"
    v-bind="multiline ? {} : { type }"
    :placeholder="placeholder"
    class="input"
    :class="[`input--${variant}`, { 'input--textarea': multiline }]"
  />
</template>

<style scoped>
.input {
  width: 100%;
  padding: 18px 30px;
  border-radius: 14px;
  font-size: 18px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
}

.input:focus {
  border-color: var(--color-accent);
}

.input--dark {
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
}

.input--dark::placeholder {
  color: rgb(255 255 255 / 0.6);
}

.input--light {
  border: 1px solid var(--color-dark);
  background-color: #fff;
  color: var(--color-dark);
}

.input--light::placeholder {
  color: rgb(25 26 35 / 0.4);
}

.input--textarea {
  resize: vertical;
  min-height: 190px;
  max-height: 400px;
  padding-top: 18px;
  line-height: 1.5;
}
</style>
