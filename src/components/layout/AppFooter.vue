<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseContainer from '@/components/layout/BaseContainer.vue';
import SuccessModal from '@/components/ui/modals/SuccessModal.vue';
import type { NavLink, SocialIcon } from '@/types/index';
import { subscribeNewsletter } from '@/api/newsletter';

const base = import.meta.env.BASE_URL;
const subscribeEmail = ref('');
const isSuccessOpen = ref(false);
const isSubmitting = ref(false);
const subscribeError = ref('');

function clearError() {
  subscribeError.value = '';
}

async function subscribe() {
  subscribeError.value = '';
  isSubmitting.value = true;

  try {
    await subscribeNewsletter(subscribeEmail.value);
    isSuccessOpen.value = true;
    subscribeEmail.value = '';
  } catch (err) {
    subscribeError.value = 'Something went wrong. Please try again.';
    console.error(err);
  } finally {
    isSubmitting.value = false;
  }
}

const navLinks: NavLink[] = [
  { label: 'About us', to: '/about' },
  { label: 'Services', to: { path: '/', hash: '#services' } },
  { label: 'Use Cases', to: { path: '/', hash: '#use-cases' } },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
];

const socialIcons: SocialIcon[] = [
  { label: 'LinkedIn', href: '#', icon: base + 'icons/icon-linkedin.svg' },
  { label: 'Facebook', href: '#', icon: base + 'icons/icon-facebook.svg' },
  { label: 'X (Twitter)', href: '#', icon: base + 'icons/icon-x.svg' },
];
</script>

<template>
  <footer class="footer" aria-label="Site footer">
    <BaseContainer>
      <div class="footer__inner">
        <div class="footer__top">
          <a href="/" class="footer__logo" aria-label="Positivus — go to homepage">
            <img :src="base + 'icons/logo.svg'" alt="Positivus logo" width="180" height="29" />
          </a>

          <nav class="footer__nav" aria-label="Footer navigation">
            <ul class="footer__nav-list">
              <li v-for="link in navLinks" :key="link.label" class="footer__nav-item">
                <RouterLink :to="link.to" class="footer__nav-link">{{ link.label }}</RouterLink>
              </li>
            </ul>
          </nav>

          <ul class="footer__social" aria-label="Social media links">
            <li v-for="icon in socialIcons" :key="icon.label" class="footer__social-item">
              <a
                :href="icon.href"
                :aria-label="`Follow us on ${icon.label}`"
                class="footer__social-link"
              >
                <img :src="icon.icon" :alt="icon.label" width="30" height="30" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__middle">
          <address class="footer__contact" aria-label="Contact information">
            <span class="footer__contact-title">Contact us:</span>
            <div class="footer__contact-info">
              <p>
                <a href="mailto:info@positivus.com">Email: info@positivus.com</a>
              </p>
              <p><a href="tel:5555678901">Phone: 555-567-8901</a></p>
              <p>Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
            </div>
          </address>

          <form
            class="footer__subscribe"
            aria-label="Newsletter subscription"
            @submit.prevent="subscribe"
            @input="clearError"
          >
            <BaseInput
              id="subscribe-email"
              v-model="subscribeEmail"
              name="subscribe-email"
              type="email"
              placeholder="example@mail.com"
              autocomplete="email"
              aria-label="Your email address"
            />
            <BaseButton type="submit" variant="accent" :disabled="isSubmitting">
              {{ isSubmitting ? 'Subscribing...' : 'Subscribe to news' }}
            </BaseButton>
            <p v-if="subscribeError" class="footer__error" role="alert">
              {{ subscribeError }}
            </p>
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
    </BaseContainer>
  </footer>
  <SuccessModal
    v-model="isSuccessOpen"
    title="Subscribed!"
    message="You've been added to our newsletter. Stay tuned for updates!"
  />
</template>

<style lang="scss" scoped>
.footer {
  color: $color-white;

  &__inner {
    padding: 55px;
    padding-bottom: 55px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-color: $color-dark;
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
    transition:
      background-color 0.2s,
      color 0.2s;

    &:hover {
      background-color: $color-white;
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
    background-color: $color-accent;
    color: $color-black;
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
    background-color: $color-dark-2;
    border-radius: 14px;
    padding: 58px 40px;
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;

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
    border-color: $color-white;
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
      color: $color-accent;
    }
  }

  &__error {
    position: absolute;
    top: 85%;
    left: 7%;
    color: $color-error;
    font-size: $text-sm;
  }
}
</style>
