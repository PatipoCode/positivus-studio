<script setup>
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import AppContainer from "./AppContainer.vue";

const navLinks = [
  { label: "About us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Blog", href: "#" },
];

const socialIcons = [
  { label: "LinkedIn", href: "#", icon: "icon-linkedin" },
  { label: "Facebook", href: "#", icon: "icon-facebook" },
  { label: "Twitter", href: "#", icon: "icon-twitter" },
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
                <a :href="link.href" class="footer__nav-link">{{
                  link.label
                }}</a>
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
                <svg class="footer__social-icon" aria-hidden="true">
                  <use :href="`/icons/sprite.svg#${icon.icon}`" />
                </svg>
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

          <div
            class="footer__subscribe"
            role="form"
            aria-label="Newsletter subscription"
          >
            <BaseInput
              type="email"
              placeholder="Email"
              aria-label="Your email address"
            />
            <BaseButton variant="accent">Subscribe to news</BaseButton>
          </div>
        </div>

        <div class="footer__bottom">
          <hr class="footer__divider" />
          <div class="footer__copyright">
            <span>© 2026 Positivus Studio. All Rights Reserved.</span>
            <a href="" class="footer__policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </AppContainer>
  </footer>
</template>

<style scoped>
.footer {
  color: #fff;
}

.footer__inner {
  padding: 55px;
  padding-bottom: 55px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: var(--color-dark);
  border-radius: 45px 45px 0 0;
}

.footer__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__logo img {
  filter: brightness(0) invert(1);
}

.footer__nav-list {
  display: flex;
  align-items: center;
  gap: 40px;
}

.footer__nav-link {
  font-size: 18px;
  text-decoration: underline;
  transition: color 0.2s;
}

.footer__nav-link:hover {
  color: var(--color-accent);
}

.footer__social {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer__social-link {
  display: flex;
  transition: opacity 0.2s;
}

.footer__social-link:hover {
  opacity: 0.8;
}

.footer__social-icon {
  width: 30px;
  height: 30px;
  fill: #fff;
}

.footer__middle {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 154px;
}

.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 27px;
}

.footer__contact-title {
  display: inline-block;
  width: fit-content;
  background-color: var(--color-accent);
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 7px;
  border-radius: 7px;
}

.footer__contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.footer__subscribe {
  background-color: var(--color-dark-2);
  border-radius: 14px;
  padding: 58px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer__bottom {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.footer__divider {
  border-color: #fff;
}

.footer__copyright {
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 18px;
}

.footer__policy {
  text-decoration: underline;
  transition: color 0.2s;
}

.footer__policy:hover {
  color: var(--color-accent);
}
</style>
