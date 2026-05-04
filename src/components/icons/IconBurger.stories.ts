import type { Meta, StoryObj } from '@storybook/vue3-vite';
import IconBurger from './IconBurger.vue';

const meta = {
  title: 'Icons/IconBurger',
  component: IconBurger,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    size: { control: { type: 'number', min: 16, max: 60 } },
  },
} satisfies Meta<typeof IconBurger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: { open: false, size: 28 },
};

export const Open: Story = {
  args: { open: true, size: 28 },
};
