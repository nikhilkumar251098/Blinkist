import TypographyComponent from "./TypographyComponent";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Atoms/Typography",
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>;

const Template: ComponentStory<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args} />
);

export const Heading = Template.bind({});
Heading.args = {
  variant: "h1",
  children: "Heading",
  color: "textColors.highEmphasis",
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: "body1",
  children: "Body 1",
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: "body2",
  children: "Body 2",
};

export const Body3 = Template.bind({});
Body3.args = {
  variant: "h2",
  children: "Body 3",
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  variant: "subtitle1",
  children: "Subtitle 1",
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  variant: "subtitle2",
  children: "Subtitle 2",
};

export const Subtitle3 = Template.bind({});
Subtitle3.args = {
  variant: "h3",
  children: "Subtitle 3",
};

export const Caption1 = Template.bind({});
Caption1.args = {
  variant: "caption",
  children: "Caption 1",
};

export const Caption2 = Template.bind({});
Caption2.args = {
  variant: "h4",
  children: "Caption 2",
};
