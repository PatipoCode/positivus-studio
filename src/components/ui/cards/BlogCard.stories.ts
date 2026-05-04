import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BlogCard from './BlogCard.vue';

const meta = {
  title: 'UI/Cards/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div style="max-width: 600px"><story /></div>',
    }),
  ],
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: 'Tutorial',
    date: 'January 20, 2024',
    title: 'How to quickly deploy a static website',
    description:
      'Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools.',
    author: { name: 'Jese Leos', avatar: '/blog/authors/jese-leos.png' },
    href: '#',
  },
};

export const LongTitle: Story = {
  args: {
    category: 'Analytics',
    date: 'March 28, 2024',
    title: "Understanding your data: a marketer's guide to Google Analytics 4",
    description:
      'GA4 introduced a completely new data model. We explain the key concepts, how to set up events, and which reports matter most for digital marketing decisions.',
    author: { name: 'Brian Williams', avatar: '/team/brian-williams.png' },
    href: '#',
  },
};
