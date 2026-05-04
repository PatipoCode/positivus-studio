import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CaseStudyCard from './CaseStudyCard.vue';

const meta = {
  title: 'UI/Cards/CaseStudyCard',
  component: CaseStudyCard,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template:
        '<div style="background: #191A23; padding: 60px; max-width: 500px"><story /></div>',
    }),
  ],
} satisfies Meta<typeof CaseStudyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Local Restaurant PPC Campaign',
    description:
      'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    client: 'Bella Cucina Restaurant',
    service: 'Pay-Per-Click Advertising',
    metrics: [
      { label: 'Website Traffic', value: '+50%' },
      { label: 'Sales Increase', value: '+25%' },
      { label: 'Campaign Duration', value: '3 months' },
    ],
    details:
      'We identified high-intent local keywords, created geo-targeted ad campaigns, and optimized landing pages for conversions.',
  },
};
