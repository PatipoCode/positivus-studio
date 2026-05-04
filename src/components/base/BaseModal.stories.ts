import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import BaseModal from './BaseModal.vue';
import BaseButton from './BaseButton.vue';

const meta = {
  title: 'Base/BaseModal',
  component: BaseModal,
  tags: ['autodocs'],
  argTypes: {
    closable: { control: 'boolean' },
    maxWidth: { control: 'text' },
  },
} satisfies Meta<typeof BaseModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Book a Consultation',
    closable: true,
    maxWidth: '600px',
  },
  render: (args) => ({
    components: { BaseModal, BaseButton },
    setup() {
      const isOpen = ref(true);
      return { args, isOpen };
    },
    template: `
      <BaseButton @click="isOpen = true">Open modal</BaseButton>
      <BaseModal v-bind="args" v-model="isOpen">
        <p>Modal content goes here. You can put forms, text, or any other content.</p>
      </BaseModal>
    `,
  }),
};

export const NoCloseButton: Story = {
  args: {
    title: 'Important Notice',
    closable: false,
  },
  render: (args) => ({
    components: { BaseModal, BaseButton },
    setup() {
      const isOpen = ref(true);
      return { args, isOpen };
    },
    template: `
      <BaseButton @click="isOpen = true">Open modal</BaseButton>
      <BaseModal v-bind="args" v-model="isOpen">
        <p>This modal can't be closed by the user — close it programmatically.</p>
        <BaseButton @click="isOpen = false" style="margin-top: 16px">Got it</BaseButton>
      </BaseModal>
    `,
  }),
};

export const NoTitle: Story = {
  args: {
    closable: true,
  },
  render: (args) => ({
    components: { BaseModal, BaseButton },
    setup() {
      const isOpen = ref(true);
      return { args, isOpen };
    },
    template: `
      <BaseButton @click="isOpen = true">Open modal</BaseButton>
      <BaseModal v-bind="args" v-model="isOpen">
        <p>Modal without a title.</p>
      </BaseModal>
    `,
  }),
};
