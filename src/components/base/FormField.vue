<script setup>
import BaseFormField from "./BaseFormField.vue";
import { Field, ErrorMessage } from "vee-validate";

defineProps({
  name: { type: String, required: true },
  label: String,
  rules: String,
  required: { type: Boolean, default: false },
});
</script>

<template>
  <BaseFormField :label="label" :html-for="name" :required="required">
    <Field :name="name" :rules="rules" v-slot="{ field, value, errorMessage }">
      <slot :field="field" :value="value" :has-error="!!errorMessage" />
    </Field>
    <div class="form-field-error-wrap">
      <ErrorMessage :name="name" class="form-field-error" />
    </div>
  </BaseFormField>
</template>

<style lang="scss" scoped>
.form-field-error-wrap {
  min-height: 1.4em;
}

.form-field-error {
  font-size: $text-sm;
  color: $color-error;
}
</style>
