<script setup lang="ts">
import { watch } from "vue";
import BaseModal from "@/components/base/BaseModal.vue";
import IconCheck from "@/components/icons/IconCheck.vue";

const model = defineModel({ default: false });

watch(model, (val) => {
  if (val) {
    setTimeout(() => {
      model.value = false;
    }, 3000);
  }
});

defineProps({
  title: { type: String, default: "Message Sent!" },
  message: {
    type: String,
    default:
      "Thank you for reaching out. We'll get back to you as soon as possible.",
  },
});
</script>

<template>
  <BaseModal v-model="model" maxWidth="440px" :closable="false">
    <div class="success">
      <div class="success__icon">
        <IconCheck :size="40" />
      </div>
      <h2 class="success__title">{{ title }}</h2>
      <p class="success__message">{{ message }}</p>
    </div>
  </BaseModal>
</template>

<style lang="scss" scoped>
.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;

  &__icon {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: $color-accent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: $text-2xl;
    font-weight: 700;
  }

  &__message {
    font-size: $text-lg;
    color: $color-text-light;
    line-height: 1.5;
  }

  &__button {
    width: 100%;
    text-align: center;
    margin-top: 8px;
  }
}
</style>
