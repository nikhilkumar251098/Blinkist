import { ComponentMeta, ComponentStory } from "@storybook/react";
import InputField from "./inputfield";

export default {
  title: "Molecules/Input Field",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const InputField1 = Template.bind({});
InputField1.args = {
  text: "Enter the text",
};
