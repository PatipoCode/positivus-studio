<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  title: { type: String, default: "" },
  maxWidth: { type: String, default: "600px" },
  closable: { type: Boolean, default: true },
});

const emit = defineEmits(["update:modelValue"]);

const close = () => emit("update:modelValue", false);

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") close();
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onUnmounted(() => window.removeEventListener("keydown", onKeydown));
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="modal-overlay"
        role="dialog"
        aria-modal="true"
        :aria-label="title || 'Dialog'"
        @click.self="close"
      >
        <div class="modal" :style="{ maxWidth }">
          <div v-if="title || closable" class="modal__header">
            <h2 v-if="title" class="modal__title">{{ title }}</h2>
            <button
              v-if="closable"
              type="button"
              class="modal__close"
              aria-label="Close dialog"
              @click="close"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>

          <div class="modal__body">
            <slot />
          </div>

          <div v-if="$slots.footer" class="modal__footer">
            <slot name="footer" :close="close" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-overlay {
  @include flex-center;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  padding: 20px;
  z-index: 1000;

  @media (max-width: $bp-sm) {
    padding: 10px;
  }
}

.modal {
  @include card-border($radius-lg);
  width: 100%;
  max-height: 90vh;
  background-color: $color-white;
  overflow-y: auto;

  @media (max-width: $bp-sm) {
    max-height: 95vh;
  }

  &__header {
    @include flex-between;
    padding: 28px 32px 0;

    @media (max-width: $bp-sm) {
      padding: 20px 20px 0;
    }
  }

  &__title {
    font-size: $text-2xl;
    font-weight: 700;
  }

  &__close {
    @include flex-center;
    background: none;
    border: none;
    cursor: pointer;
    color: $color-dark;
    padding: 4px;
    border-radius: 6px;
    transition: opacity 0.2s;
    margin-left: auto;

    &:hover {
      opacity: 0.6;
    }
  }

  &__body {
    padding: 24px 32px 32px;

    @media (max-width: $bp-sm) {
      padding: 16px 20px 24px;
    }
  }

  &__footer {
    padding: 0 32px 32px;
    display: flex;
    justify-content: flex-end;
    gap: 12px;

    @media (max-width: $bp-sm) {
      padding: 0 20px 24px;
    }
  }
}

/* transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;

  .modal {
    transition: transform 0.2s ease;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;

  .modal {
    transform: translateY(-16px);
  }
}
</style>
