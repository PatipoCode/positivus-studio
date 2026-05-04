import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import CaseStudyModal from './CaseStudyModal.vue';
import BaseButton from '../../base/BaseButton.vue';

const meta = {
  title: 'UI/Modals/CaseStudyModal',
  component: CaseStudyModal,
  tags: ['autodocs'],
} satisfies Meta<typeof CaseStudyModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { CaseStudyModal, BaseButton },
    setup() {
      const isOpen = ref(true);
      return { isOpen };
    },
    template: `
      <BaseButton @click="isOpen = true">Open case study</BaseButton>
      <CaseStudyModal
        v-model="isOpen"
        title="Local Restaurant PPC Campaign"
        description="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
        client="Bella Cucina Restaurant"
        service="Pay-Per-Click Advertising"
        :metrics="[
          { label: 'Website Traffic', value: '+50%' },
          { label: 'Sales Increase', value: '+25%' },
          { label: 'Campaign Duration', value: '3 months' },
        ]"
        details="We identified high-intent local keywords, created geo-targeted ad campaigns, and optimized landing pages for conversions."
      />
    `,
  }),
};
