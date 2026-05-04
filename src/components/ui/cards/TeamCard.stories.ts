import type { Meta, StoryObj } from '@storybook/vue3-vite';
import TeamCard from './TeamCard.vue';

const meta = {
  title: 'UI/Cards/TeamCard',
  component: TeamCard,
  tags: ['autodocs'],
} satisfies Meta<typeof TeamCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'John Smith',
    role: 'CEO and Founder',
    description:
      '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    image: '/team/john-smith.png',
  },
};

export const ShortDescription: Story = {
  args: {
    name: 'Jane Doe',
    role: 'Director of Operations',
    description: 'Strong organizational and communication skills.',
    image: '/team/jane-doe.png',
  },
};
