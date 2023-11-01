import type { StoryObj, Meta } from "@storybook/html";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  tags: ["autodocs"],

  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const Template = (args) => `<my-button {...args}></my-component>`;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary: Story = {
  render: Template,
  args: {
    primary: true,
    label: "Button",
  },
};
