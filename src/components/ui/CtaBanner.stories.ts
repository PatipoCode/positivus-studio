import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CtaBanner from './CtaBanner.vue';

const meta = {
  title: 'UI/CtaBanner',
  component: CtaBanner,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div style="max-width: 1200px"><story /></div>',
    }),
  ],
} satisfies Meta<typeof CtaBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
