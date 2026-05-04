import type { Meta, StoryObj } from '@storybook/vue3-vite';
import PricingCard from './PricingCard.vue';

const meta = {
  title: 'UI/Cards/PricingCard',
  component: PricingCard,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div style="max-width: 400px"><story /></div>',
    }),
  ],
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Starter: Story = {
  args: {
    name: 'Starter',
    description: 'Best option for personal use & for your next project',
    price: 29,
    features: [
      { label: 'Individual configuration' },
      { label: 'No setup, or hidden fees' },
      { label: 'Team size:', value: '1 developer' },
      { label: 'Premium support:', value: '6 months' },
      { label: 'Free updates:', value: '6 months' },
    ],
  },
};

export const Enterprise: Story = {
  args: {
    name: 'Enterprise',
    description: 'Best for large scale uses and extended redistribution rights',
    price: 499,
    features: [
      { label: 'Individual configuration' },
      { label: 'No setup, or hidden fees' },
      { label: 'Team size:', value: '100+ developers' },
      { label: 'Premium support:', value: '36 months' },
      { label: 'Free updates:', value: '36 months' },
    ],
  },
};
