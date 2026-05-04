import type { Meta, StoryObj } from '@storybook/vue3-vite';
import IconSearch from './IconSearch.vue';

const meta = {
  title: 'Icons/IconSearch',
  component: IconSearch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 16, max: 60 } },
    color: { control: 'color' },
  },
  decorators: [
    () => ({
      template: '<div style="background: #191A23; padding: 20px"><story /></div>',
    }),
  ],
} satisfies Meta<typeof IconSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 20, color: '#fff' },
};

export const Accent: Story = {
  args: { size: 28, color: '#B9FF66' },
};
