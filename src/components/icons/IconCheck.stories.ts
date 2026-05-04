import type { Meta, StoryObj } from '@storybook/vue3-vite';
import IconCheck from './IconCheck.vue';

const meta = {
  title: 'Icons/IconCheck',
  component: IconCheck,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 16, max: 100 } },
  },
} satisfies Meta<typeof IconCheck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 24 },
};

export const Large: Story = {
  args: { size: 64 },
};
