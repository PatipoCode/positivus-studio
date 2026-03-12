<script setup>
import { ref } from "vue";
import AppSection from "./AppSection.vue";
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";

const radioValue = ref("say-hi");

const form = ref({
  name: "",
  email: "",
  message: "",
});
</script>

<template>
  <AppSection
    title="Contact Us"
    description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
    descriptionWidth="323px"
  >
    <div class="contact">
      <div class="contact__inner">
        <form class="contact__form" @submit.prevent>
          <div class="contact__radio-group">
            <label class="contact__radio">
              <input
                type="radio"
                name="contact-type"
                value="say-hi"
                v-model="radioValue"
              />
              <span class="contact__radio-label">Say Hi</span>
            </label>
            <label class="contact__radio">
              <input
                type="radio"
                name="contact-type"
                value="get-quote"
                v-model="radioValue"
              />
              <span class="contact__radio-label">Get a Quote</span>
            </label>
          </div>

          <div class="contact__fields">
            <div class="contact__field">
              <label class="contact__label" for="contact-name">Name</label>
              <BaseInput
                id="contact-name"
                placeholder="Name"
                variant="light"
                v-model="form.name"
              />
            </div>
            <div class="contact__field">
              <label class="contact__label" for="contact-email">Email*</label>
              <BaseInput
                id="contact-email"
                type="email"
                placeholder="Email"
                variant="light"
                v-model="form.email"
                required
              />
            </div>
            <div class="contact__field">
              <label class="contact__label" for="contact-message"
                >Message*</label
              >
              <BaseInput
                id="contact-message"
                placeholder="Message"
                variant="light"
                v-model="form.message"
                multiline
                required
              />
            </div>
          </div>

          <BaseButton variant="dark" type="submit">Send Message</BaseButton>
        </form>

        <div class="contact__illustration" aria-hidden="true">
          <img
            src="/contact-Illustration.png"
            alt="Contact form illustration"
          />
        </div>
      </div>
    </div>
  </AppSection>
</template>

<style scoped>
.contact__inner {
  background-color: var(--color-card, #f3f3f3);
  border-radius: 45px;
  padding: 60px 100px;
  display: flex;
  align-items: center;
  gap: 100px;
  position: relative;
  overflow: hidden;
}

.contact__form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact__radio-group {
  display: flex;
  gap: 35px;
}

.contact__radio {
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
}

.contact__radio input[type="radio"] {
  appearance: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--color-dark);
  background-color: #fff;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
}

.contact__radio input[type="radio"]:checked::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--color-accent);
}

.contact__radio-label {
  font-size: 18px;
}

.contact__fields {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.contact__label {
  font-size: 16px;
}

.contact__illustration {
  width: 592px;
  flex-shrink: 0;
  margin-right: -380px;
}

.contact__illustration img {
  width: 100%;
  height: auto;
}
</style>
