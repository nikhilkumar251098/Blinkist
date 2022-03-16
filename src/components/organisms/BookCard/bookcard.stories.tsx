import BookCard from "./bookcard";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Molecules/BookCard",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <Box width="20vw">
    <BookCard {...args} />
  </Box>
);

export const BookCard1 = Template.bind({});
BookCard1.args = {
  // book: books[8],
};
