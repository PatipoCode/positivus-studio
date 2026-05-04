import type { Meta, StoryObj } from '@storybook/vue3-vite';
import IconConstruction from './IconConstruction.vue';

const meta = {
  title: 'Icons/IconConstruction',
  component: IconConstruction,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 24, max: 120 } },
  },
} satisfies Meta<typeof IconConstruction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 48 },
};

export const Large: Story = {
  args: { size: 96 },
};
