import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BrandsBar from './BrandsBar.vue';

const meta = {
  title: 'UI/BrandsBar',
  component: BrandsBar,
  tags: ['autodocs'],
} satisfies Meta<typeof BrandsBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
