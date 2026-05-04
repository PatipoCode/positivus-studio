import type { Meta, StoryObj } from '@storybook/vue3-vite';
import IconArrow from './IconArrow.vue';

const meta = {
  title: 'Icons/IconArrow',
  component: IconArrow,
  tags: ['autodocs'],
  argTypes: {
    arrowFill: { control: 'color' },
    circleFill: { control: 'color' },
    size: { control: { type: 'number', min: 16, max: 100, step: 1 } },
  },
} satisfies Meta<typeof IconArrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 41, arrowFill: '#B9FF66' },
};

export const WithCircle: Story = {
  args: { size: 41, arrowFill: '#191A23', circleFill: '#B9FF66' },
};

export const Small: Story = {
  args: { size: 24, arrowFill: '#191A23' },
};
