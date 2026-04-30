<script setup lang="ts">
import BaseFormField from './BaseFormField.vue';
import { Field, ErrorMessage } from 'vee-validate';

interface Props {
  name: string;
  label?: string;
  rules?: string;
  required?: boolean;
}

withDefaults(defineProps<Props>(), {
  required: false,
});
</script>

<template>
  <BaseFormField :label="label" :html-for="name" :required="required">
    <Field :name="name" :rules="rules" v-slot="{ field, value, errorMessage }">
      <slot :field="{ ...field, id: name }" :value="value" :has-error="!!errorMessage" />
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
