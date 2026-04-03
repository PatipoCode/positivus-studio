<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import BaseButton from "../base/BaseButton.vue";
import BaseContainer from "./BaseContainer.vue";
import IconBurger from "../icons/IconBurger.vue";

const base = import.meta.env.BASE_URL;
const route = useRoute();
const isMenuOpen = ref(false);

const navLinks = [
  { label: "About us", to: "/about" },
  { label: "Services", to: { path: "/", hash: "#services" } },
  { label: "Use Cases", to: { path: "/", hash: "#use-cases" } },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
];

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const closeMenu = () => (isMenuOpen.value = false);

watch(() => route.path, closeMenu);

watch(isMenuOpen, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});
</script>

<template>
  <header class="header">
    <BaseContainer>
      <nav class="header__nav" aria-label="Main navigation">
        <RouterLink
          to="/"
          class="header__logo"
          aria-label="Positivus — go to homepage"
        >
          <img
            :src="base + 'icons/logo.svg'"
            alt="Positivus logo"
            width="220"
            height="36"
          />
        </RouterLink>

        <div class="header__links">
          <RouterLink
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="header__link"
            :aria-current="route.path === link.to ? 'page' : undefined"
          >{{ link.label }}</RouterLink>
          <RouterLink to="/#contact">
            <BaseButton variant="outline">Request a quote</BaseButton>
          </RouterLink>
        </div>

        <button
          class="header__burger"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          :aria-label="isMenuOpen ? 'Close navigation' : 'Open navigation'"
          @click="toggleMenu"
        >
          <IconBurger :open="isMenuOpen" />
        </button>
      </nav>
    </BaseContainer>

    <Transition name="overlay">
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="header__overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <BaseContainer class="header__overlay-inner">
          <nav class="header__overlay-nav" aria-label="Mobile navigation">
            <RouterLink
              v-for="link in navLinks"
              :key="link.label"
              :to="link.to"
              class="header__overlay-link"
              @click="closeMenu"
            >{{ link.label }}</RouterLink>
          </nav>
          <RouterLink to="/#contact" @click="closeMenu">
            <BaseButton variant="dark" class="header__overlay-cta"
              >Request a quote</BaseButton
            >
          </RouterLink>
        </BaseContainer>
      </div>
    </Transition>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: $color-white;
  position: sticky;
  top: 0;
  z-index: 100;

  &__nav {
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: fluid(140px, 220px, 14vw);
      height: auto;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: fluid(16px, 40px, 2.5vw);

    @media (max-width: $bp-lg) {
      display: none;
    }
  }

  &__link {
    font-size: $text-xl;
    white-space: nowrap;
    padding: 6px 12px;
    border-radius: $radius-sm;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: $color-dark;
      color: $color-white;
    }
  }

  &__burger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    z-index: 200;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
    }

    @media (max-width: $bp-lg) {
      display: block;
    }
  }

  &__overlay {
    position: fixed;
    top: 116px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $color-white;
    z-index: 101;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  &__overlay-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  &__overlay-nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__overlay-link {
    font-size: 28px;
    font-weight: 500;
    padding: 12px 0;
    border-bottom: 1px solid rgba($color-dark, 0.1);

    @media (max-width: $bp-sm) {
      font-size: 18px;
    }

    &:hover {
      color: $color-accent;
      padding-left: 8px;
      transition: padding 0.3s;
    }
  }

  &__overlay-cta {
    width: 100%;
    text-align: center;
  }
}

.overlay-enter-active,
.overlay-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
