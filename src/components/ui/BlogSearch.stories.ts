import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import BlogSearch from './BlogSearch.vue';

const meta = {
  title: 'UI/BlogSearch',
  component: BlogSearch,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div style="max-width: 600px"><story /></div>',
    }),
  ],
} satisfies Meta<typeof BlogSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { BlogSearch },
    setup() {
      const query = ref('');
      return { query };
    },
    template: `
      <BlogSearch v-model="query" />
      <p style="margin-top: 16px; font-family: sans-serif;">Query: "{{ query }}"</p>
    `,
  }),
};
