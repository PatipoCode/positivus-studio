import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Form } from 'vee-validate';
import FormField from './FormField.vue';
import BaseInput from './BaseInput.vue';
import '@/validation/rules';

const meta = {
  title: 'Base/FormField',
  component: FormField,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'email',
    label: 'Email',
  },
  render: (args) => ({
    components: { Form, FormField, BaseInput },
    setup: () => ({ args }),
    template: `
      <Form>
        <FormField v-bind="args">
          <template #default="{ field }">
            <BaseInput v-bind="field" placeholder="example@email.com" variant="light" />
          </template>
        </FormField>
      </Form>
    `,
  }),
};

export const Required: Story = {
  args: {
    name: 'email',
    label: 'Email',
    required: true,
    rules: 'required|email',
  },
  render: (args) => ({
    components: { Form, FormField, BaseInput },
    setup: () => ({ args }),
    template: `
      <Form>
        <FormField v-bind="args">
          <template #default="{ field, hasError }">
            <BaseInput v-bind="field" placeholder="example@email.com" variant="light" :error="hasError" />
          </template>
        </FormField>
      </Form>
    `,
  }),
};

export const Textarea: Story = {
  args: {
    name: 'message',
    label: 'Message',
    required: true,
    rules: 'required',
  },
  render: (args) => ({
    components: { Form, FormField, BaseInput },
    setup: () => ({ args }),
    template: `
      <Form>
        <FormField v-bind="args">
          <template #default="{ field, hasError }">
            <BaseInput v-bind="field" placeholder="Your message..." variant="light" multiline :error="hasError" />
          </template>
        </FormField>
      </Form>
    `,
  }),
};
