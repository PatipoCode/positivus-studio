<script setup lang="ts">
import { ref } from 'vue';
import BaseSection from '@/components/layout/BaseSection.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import FormField from '@/components/base/FormField.vue';
import BaseRadioGroup from '@/components/base/BaseRadioGroup.vue';
import SuccessModal from '@/components/ui/modals/SuccessModal.vue';
import { Form } from 'vee-validate';
import { sendContact, type ContactPayload } from '@/api/contact';

const base = import.meta.env.BASE_URL;
const radioValue = ref('say-hi');
const isSuccessOpen = ref(false);
const isSubmitting = ref(false);
const submitError = ref('');

function clearError() {
  submitError.value = '';
}

async function submit(values: Record<string, string>, { resetForm }: { resetForm: () => void }) {
  submitError.value = '';
  isSubmitting.value = true;

  try {
    const payload: ContactPayload = {
      name: values.name || undefined,
      email: values.email,
      message: values.message,
      contactType: radioValue.value as 'say-hi' | 'get-quote',
    };

    await sendContact(payload);

    isSuccessOpen.value = true;
    resetForm();
    radioValue.value = 'say-hi';
  } catch (err) {
    submitError.value = 'Something went wrong. Please try again.';
    console.error(err);
  } finally {
    isSubmitting.value = false;
  }
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
        <Form v-slot="{ meta }" class="contact__form" @input="clearError" @submit="submit">
          <BaseRadioGroup
            v-model="radioValue"
            name="contact-type"
            :options="[
              { label: 'Say Hi', value: 'say-hi' },
              { label: 'Get a Quote', value: 'get-quote' },
            ]"
          />

          <div class="contact__fields">
            <FormField name="name" label="Name">
              <template #default="{ field }">
                <BaseInput
                  v-bind="field"
                  placeholder="John Smith"
                  variant="light"
                  autocomplete="name"
                />
              </template>
            </FormField>

            <FormField name="email" label="Email" rules="required|email" required>
              <template #default="{ field, hasError }">
                <BaseInput
                  v-bind="field"
                  placeholder="example@email.com"
                  variant="light"
                  autocomplete="email"
                  :error="hasError"
                />
              </template>
            </FormField>

            <FormField name="message" label="Message" rules="required" required>
              <template #default="{ field, value, hasError }">
                <div class="contact__message-wrap">
                  <BaseInput
                    v-bind="field"
                    placeholder="Message ....."
                    variant="light"
                    multiline
                    maxlength="500"
                    :error="hasError"
                  />
                  <span class="contact__counter">{{ (value || '').length }}/500</span>
                </div>
              </template>
            </FormField>
          </div>

          <div class="contact__submit">
            <BaseButton variant="dark" type="submit" :disabled="!meta.valid || isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </BaseButton>
            <p v-if="submitError" class="contact__error" role="alert">
              {{ submitError }}
            </p>
          </div>
        </Form>

        <div class="contact__illustration" aria-hidden="true">
          <img :src="base + 'contact-Illustration.png'" alt="Contact form illustration" />
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

  &__message-wrap {
    position: relative;
  }

  &__counter {
    position: absolute;
    top: -23px;
    right: 12px;
    font-size: $text-sm;
    color: $color-text-muted;
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

  &__submit {
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
  }

  &__error {
    position: absolute;
    top: 100%;
    left: 0;
    margin: 8px 0 0;
    color: $color-error;
    font-size: $text-sm;
  }
}
</style>
