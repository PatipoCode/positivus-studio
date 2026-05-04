import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import SuccessModal from './SuccessModal.vue';
import BaseButton from '../../base/BaseButton.vue';

const meta = {
  title: 'UI/Modals/SuccessModal',
  component: SuccessModal,
  tags: ['autodocs'],
} satisfies Meta<typeof SuccessModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { SuccessModal, BaseButton },
    setup() {
      const isOpen = ref(true);
      return { isOpen };
    },
    template: `
      <BaseButton @click="isOpen = true">Show success</BaseButton>
      <SuccessModal v-model="isOpen" />
    `,
  }),
};

export const SubscribeMessage: Story = {
  render: () => ({
    components: { SuccessModal, BaseButton },
    setup() {
      const isOpen = ref(true);
      return { isOpen };
    },
    template: `
      <BaseButton @click="isOpen = true">Show subscribed</BaseButton>
      <SuccessModal
        v-model="isOpen"
        title="Subscribed!"
        message="You've been added to our newsletter. Stay tuned for updates!"
      />
    `,
  }),
};
