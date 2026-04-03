<script setup>
import { ref } from "vue";
import BaseSection from "../layout/BaseSection.vue";
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";
import BaseFormField from "../base/BaseFormField.vue";
import BaseRadioGroup from "../base/BaseRadioGroup.vue";
import SuccessModal from "../ui/modals/SuccessModal.vue";

const base = import.meta.env.BASE_URL;
const radioValue = ref("say-hi");

const form = ref({
  name: "",
  email: "",
  message: "",
});

const isSuccessOpen = ref(false);

function submit() {
  isSuccessOpen.value = true;
  form.value = { name: "", email: "", message: "" };
  radioValue.value = "say-hi";
}
</script>

<template>
  <BaseSection
    id="contact"
    title="Contact Us"
    description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
    descriptionWidth="323px"
  >
    <div class="contact">
      <div class="contact__inner">
        <form class="contact__form" @submit.prevent="submit">
          <BaseRadioGroup
            v-model="radioValue"
            name="contact-type"
            :options="[
              { label: 'Say Hi', value: 'say-hi' },
              { label: 'Get a Quote', value: 'get-quote' },
            ]"
          />

          <div class="contact__fields">
            <BaseFormField label="Name" html-for="contact-name">
              <BaseInput
                id="contact-name"
                placeholder="Name"
                variant="light"
                v-model="form.name"
              />
            </BaseFormField>
            <BaseFormField label="Email*" html-for="contact-email">
              <BaseInput
                id="contact-email"
                type="email"
                placeholder="example@email.com"
                variant="light"
                v-model="form.email"
              />
            </BaseFormField>
            <BaseFormField label="Message*" html-for="contact-message">
              <BaseInput
                id="contact-message"
                placeholder="Message..."
                variant="light"
                v-model="form.message"
                multiline
              />
            </BaseFormField>
          </div>

          <BaseButton variant="dark" type="submit">Send Message</BaseButton>
        </form>

        <div class="contact__illustration" aria-hidden="true">
          <img
            :src="base + 'contact-Illustration.png'"
            alt="Contact form illustration"
          />
        </div>
      </div>
    </div>
  </BaseSection>
  <SuccessModal v-model="isSuccessOpen" />
</template>

<style lang="scss" scoped>
.contact {
  &__inner {
    background-color: $color-card;
    border-radius: 45px;
    padding: $form-padding;
    display: flex;
    align-items: center;
    gap: fluid(32px, 100px, 6vw);
    position: relative;
    overflow: hidden;
  }

  &__form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 880px) {
      .button {
        width: 100%;
        text-align: center;
      }
    }
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__illustration {
    width: fluid(200px, 592px, 38vw);
    flex-shrink: 1;
    margin-right: clamp(-380px, -25vw, -150px);

    @media (max-width: 880px) {
      display: none;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
