import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ServiceCard from './ServiceCard.vue';

const meta = {
  title: 'UI/Cards/ServiceCard',
  component: ServiceCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'accent', 'dark'],
    },
  },
  decorators: [
    () => ({
      template: '<div style="max-width: 600px"><story /></div>',
    }),
  ],
  render: (args) => ({
    components: { ServiceCard },
    setup: () => ({ args }),
    template: '<ServiceCard v-bind="args" />',
  }),
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    title: 'Search engine optimization',
    image: '/services/image-service-seo.png',
    variant: 'light',
    href: '/services/seo',
  },
};

export const Accent: Story = {
  args: {
    title: 'Pay-per-click advertising',
    image: '/services/image-service-ppc.png',
    variant: 'accent',
    href: '/services/ppc',
  },
};

export const Dark: Story = {
  args: {
    title: 'Social Media Marketing',
    image: '/services/image-service-smm.png',
    variant: 'dark',
    href: '/services/smm',
  },
};
