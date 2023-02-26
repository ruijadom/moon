import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      options: ["sm" , "md" , "lg" , "xl"],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps)  => <Button {...args} >Button</Button>;

export const Default = Template.bind({});