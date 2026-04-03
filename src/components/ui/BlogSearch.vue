<script setup>
import BaseInput from "../base/BaseInput.vue";
import IconSearch from "../icons/IconSearch.vue";

const model = defineModel({ type: String, default: "" });
</script>

<template>
  <div class="blog-search">
    <BaseInput
      v-model="model"
      variant="light"
      placeholder="Search articles..."
      aria-label="Search articles"
      class="blog-search__input"
    />
    <button class="blog-search__btn" type="submit" aria-label="Search">
      <IconSearch />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.blog-search {
  display: flex;
  align-items: stretch;
  gap: 16px;

  &__input {
    flex: 1;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-dark);
    border: none;
    border-radius: 14px;
    padding: 0 24px;
    cursor: pointer;
    flex-shrink: 0;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }
  }
}
</style>
