<script setup>
import BaseButton from "./BaseButton.vue";
import AppContainer from "./AppContainer.vue";

const navLinks = [
  { label: "About us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
];
</script>

<template>
  <header class="header">
    <AppContainer>
      <nav class="header__nav" aria-label="Main navigation">
        <a
          href="/"
          class="header__logo"
          aria-label="Positivus — go to homepage"
        >
          <img
            src="/icons/logo.svg"
            alt="Positivus logo"
            width="220"
            height="36"
          />
        </a>
        <div class="header__links">
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            class="header__link"
            >{{ link.label }}</a
          >
          <BaseButton variant="outline">Request a quote</BaseButton>
        </div>
      </nav>
    </AppContainer>
  </header>
</template>

<style scoped>
.header {
  background-color: #fff;
}

.header__nav {
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__links {
  display: flex;
  align-items: center;
  gap: 40px;
}

.header__link {
  font-size: 20px;
}

.header__link:hover {
  text-decoration: underline;
}
</style>
