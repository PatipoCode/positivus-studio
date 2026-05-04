import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseInput from './BaseInput.vue';

const meta = {
  title: 'Base/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['dark', 'light'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'tel', 'date'],
    },
    multiline: { control: 'boolean' },
    error: { control: 'boolean' },
  },
} satisfies Meta<typeof BaseInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    placeholder: 'Email',
    variant: 'dark',
  },
  decorators: [
    () => ({
      template: '<div style="background:#191A23;padding:40px;border-radius:8px"><story /></div>',
    }),
  ],
};

export const Light: Story = {
  args: {
    placeholder: 'Your name',
    variant: 'light',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'example@email.com',
    variant: 'light',
  },
};

export const Textarea: Story = {
  args: {
    placeholder: 'Your message...',
    variant: 'light',
    multiline: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Email',
    variant: 'light',
    error: true,
    modelValue: 'not-an-email',
  },
};
