import FilledButton from "./filledbutton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Molecules/Filled Button",
  component: FilledButton,
} as ComponentMeta<typeof FilledButton>;

const Template: ComponentStory<typeof FilledButton> = (args) => (
  <FilledButton {...args} />
);

export const Finished = Template.bind({});
Finished.args = {
  textColor: "textColors.highEmphasis",
  children: "Finished Reading",
  bgcolor: "primary.300",
  textVariant: "body1",
};
