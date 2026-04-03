<script setup>
import { ref } from "vue";
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";
import AppContainer from "./AppContainer.vue";
import SuccessModal from "../ui/modals/SuccessModal.vue";

const subscribeEmail = ref("");
const isSuccessOpen = ref(false);

function subscribe() {
  if (!subscribeEmail.value) return;
  isSuccessOpen.value = true;
  subscribeEmail.value = "";
}

const navLinks = [
  { label: "About us", to: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
];

const socialIcons = [
  { label: "LinkedIn", href: "#", icon: "/icons/icon-linkedin.svg" },
  { label: "Facebook", href: "#", icon: "/icons/icon-facebook.svg" },
  { label: "X (Twitter)", href: "#", icon: "/icons/icon-x.svg" },
];
</script>

<template>
  <footer class="footer" aria-label="Site footer">
    <AppContainer>
      <div class="footer__inner">
        <div class="footer__top">
          <a
            href="/"
            class="footer__logo"
            aria-label="Positivus — go to homepage"
          >
            <img
              src="/icons/logo.svg"
              alt="Positivus logo"
              width="180"
              height="29"
            />
          </a>

          <nav class="footer__nav" aria-label="Footer navigation">
            <ul class="footer__nav-list">
              <li
                v-for="link in navLinks"
                :key="link.label"
                class="footer__nav-item"
              >
                <RouterLink
                  v-if="link.to"
                  :to="link.to"
                  class="footer__nav-link"
                >{{ link.label }}</RouterLink>
                <a v-else :href="link.href" class="footer__nav-link">{{ link.label }}</a>
              </li>
            </ul>
          </nav>

          <ul class="footer__social" aria-label="Social media links">
            <li
              v-for="icon in socialIcons"
              :key="icon.label"
              class="footer__social-item"
            >
              <a
                :href="icon.href"
                :aria-label="`Follow us on ${icon.label}`"
                class="footer__social-link"
              >
                <img
                  :src="icon.icon"
                  :alt="icon.label"
                  width="30"
                  height="30"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__middle">
          <address class="footer__contact" aria-label="Contact information">
            <span class="footer__contact-title">Contact us:</span>
            <div class="footer__contact-info">
              <p>
                <a href="mailto:info@positivus.com"
                  >Email: info@positivus.com</a
                >
              </p>
              <p><a href="tel:5555678901">Phone: 555-567-8901</a></p>
              <p>
                Address: 1234 Main St<br />Moonstone City, Stardust State 12345
              </p>
            </div>
          </address>

          <form
            class="footer__subscribe"
            aria-label="Newsletter subscription"
            @submit.prevent="subscribe"
          >
            <BaseInput
              v-model="subscribeEmail"
              type="email"
              placeholder="example@mail.com"
              aria-label="Your email address"
            />
            <BaseButton type="submit" variant="accent">Subscribe to news</BaseButton>
          </form>
        </div>

        <div class="footer__bottom">
          <hr class="footer__divider" />
          <div class="footer__copyright">
            <span>© 2026 Positivus. All Rights Reserved.</span>
            <a href="" class="footer__policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </AppContainer>
  </footer>
  <SuccessModal
    v-model="isSuccessOpen"
    title="Subscribed!"
    message="You've been added to our newsletter. Stay tuned for updates!"
  />
</template>

<style lang="scss" scoped>
.footer {
  color: #fff;

  &__inner {
    padding: 55px;
    padding-bottom: 55px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: var(--color-dark);
    border-radius: 45px 45px 0 0;

    @media (max-width: $bp-xl) {
      padding: 40px 24px;
      gap: 36px;
      border-radius: 24px 24px 0 0;
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 35px;
    }
  }

  &__logo {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: fluid(120px, 180px, 12vw);
      height: auto;
      filter: brightness(0) invert(1);
    }
  }

  &__nav-list {
    display: flex;
    align-items: center;
    gap: fluid(16px, 40px, 2.5vw);

    @media (max-width: $bp-xl) {
      flex-wrap: wrap;
      gap: 16px 24px;
    }
  }

  &__nav-link {
    font-size: $text-lg;
    text-decoration: underline;
    padding: 6px 12px;
    border-radius: $radius-sm;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: #fff;
      color: $color-dark;
      text-decoration: none;
    }
  }

  &__social {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 900px) {
      position: absolute;
      right: 0;
    }
  }

  &__social-link {
    display: flex;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  &__middle {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: $bp-lg) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__contact {
    display: flex;
    flex-direction: column;
    gap: 27px;
  }

  &__contact-title {
    display: inline-block;
    width: fit-content;
    background-color: var(--color-accent);
    color: #000;
    font-size: $text-xl;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0 7px;
    border-radius: 7px;
  }

  &__contact-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: $text-lg;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__subscribe {
    background-color: var(--color-dark-2);
    border-radius: 14px;
    padding: 58px 40px;
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: $bp-lg) {
      flex-direction: column;
      padding: 32px 24px;
      width: 100%;

      .button {
        width: 100%;
        text-align: center;
      }
    }
  }


  &__bottom {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  &__divider {
    border-color: #fff;
  }

  &__copyright {
    display: flex;
    align-items: center;
    gap: 40px;
    font-size: $text-lg;

    @media (max-width: $bp-xl) {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  &__policy {
    text-decoration: underline;
    transition: color 0.2s;

    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>
