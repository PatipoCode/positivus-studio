<script setup>
defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
});
</script>

<template>
  <input :type="type" :placeholder="placeholder" class="input" />
</template>

<style scoped>
.input {
  width: 285px;
  height: 67px;
  border-radius: 14px;
  border: 1px solid #fff;
  background-color: transparent;
  padding: 0 35px;
  font-size: 18px;
  color: #fff;
  outline: none;
  transition: border-color 0.2s;
}

.input::placeholder {
  color: rgb(255 255 255 / 0.6);
}

.input:focus {
  border-color: var(--color-accent);
}
</style>
