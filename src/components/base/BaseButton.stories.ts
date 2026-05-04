import type { Meta, StoryObj } from '@storybook/vue3-vite';
import BaseButton from './BaseButton.vue';

const meta = {
  title: 'Base/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['dark', 'outline', 'accent'],
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    default: 'text',
  },
} satisfies Meta<typeof BaseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: { variant: 'dark' },
};

export const Outline: Story = {
  args: { variant: 'accent' },
};

export const Accent: Story = {
  args: { variant: 'accent' },
};

export const Disabled: Story = {
  args: { variant: 'dark', disabled: true },
};
