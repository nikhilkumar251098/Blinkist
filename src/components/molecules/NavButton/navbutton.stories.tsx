import NavButton from "./navbutton";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

export default {
  title: "Molecules/Nav Button",
  component: NavButton,
} as ComponentMeta<typeof NavButton>;

const Template: ComponentStory<typeof NavButton> = (args) => (
  <NavButton {...args} />
);

export const Explore = Template.bind({});
Explore.args = {
  children: "Explore",
  textColor: "textColors.highEmphasis",
  textVariant: "body1",
  hoverColor: "background.default",
  hoverTextColor: "primary.300",
  postElement: <KeyboardArrowDownOutlined />,
};
