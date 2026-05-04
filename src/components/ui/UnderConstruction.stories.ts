import type { Meta, StoryObj } from '@storybook/vue3-vite';
import UnderConstruction from './UnderConstruction.vue';

const meta = {
  title: 'UI/UnderConstruction',
  component: UnderConstruction,
  tags: ['autodocs'],
} satisfies Meta<typeof UnderConstruction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    title: 'Coming Soon',
    message: 'We are working hard to bring you something amazing.',
  },
};
