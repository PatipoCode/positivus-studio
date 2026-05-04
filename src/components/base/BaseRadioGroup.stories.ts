import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import BaseRadioGroup from './BaseRadioGroup.vue';

const meta = {
  title: 'Base/BaseRadioGroup',
  component: BaseRadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof BaseRadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'contact-type',
    options: [
      { label: 'Say Hi', value: 'say-hi' },
      { label: 'Get a Quote', value: 'get-quote' },
    ],
  },
  render: (args) => ({
    components: { BaseRadioGroup },
    setup() {
      const selected = ref('say-hi');
      return { args, selected };
    },
    template: `
      <BaseRadioGroup v-bind="args" v-model="selected" />
      <p style="margin-top: 20px; font-family: sans-serif;">
        Selected: {{ selected }}
      </p>
    `,
  }),
};

export const ManyOptions: Story = {
  args: {
    name: 'plan',
    options: [
      { label: 'Starter', value: 'starter' },
      { label: 'Company', value: 'company' },
      { label: 'Enterprise', value: 'enterprise' },
    ],
  },
  render: (args) => ({
    components: { BaseRadioGroup },
    setup() {
      const selected = ref('company');
      return { args, selected };
    },
    template: `<BaseRadioGroup v-bind="args" v-model="selected" />`,
  }),
};
