import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseAccordion from './BaseAccordion.vue';

const meta = {
  title: 'Base/BaseAccordion',
  component: BaseAccordion,
  tags: ['autodocs'],
} satisfies Meta<typeof BaseAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSteps = [
  { number: '01', title: 'Consultation', description: 'Discuss your goals and target audience.' },
  { number: '02', title: 'Strategy', description: 'Develop a customized plan for your business.' },
  { number: '03', title: 'Implementation', description: 'Execute the plan with best practices.' },
];

export const Default: Story = {
  args: {
    items: sampleSteps,
  },
  render: (args) => ({
    components: { BaseAccordion },
    setup: () => ({ args }),
    template: `
      <BaseAccordion v-bind="args">
        <template #header="{ item }">
          <strong>{{ item.number }} — {{ item.title }}</strong>
        </template>
        <template #body="{ item }">
          <p>{{ item.description }}</p>
        </template>
      </BaseAccordion>
    `,
  }),
};

export const SecondOpen: Story = {
  args: {
    items: sampleSteps,
    defaultOpen: 1,
  },
  render: (args) => ({
    components: { BaseAccordion },
    setup: () => ({ args }),
    template: `
      <BaseAccordion v-bind="args">
        <template #header="{ item }">
          <strong>{{ item.title }}</strong>
        </template>
        <template #body="{ item }">
          <p>{{ item.description }}</p>
        </template>
      </BaseAccordion>
    `,
  }),
};
