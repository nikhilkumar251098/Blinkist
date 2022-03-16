import { render, screen } from "@testing-library/react";
import NavButton from "./navbutton";
import "@testing-library/jest-dom";
import React from "react"

test("should render the Nav Button component", () => {
  render(<NavButton children="Nav Button" textVariant="h2" />);
  const navButton = screen.getByRole("button");
  expect(navButton).toBeInTheDocument();
});

test("should contain the text given", () => {
  render(<NavButton children="Nav Button" textVariant="h2" />);
  const navButton = screen.queryByText(/Nav Button/i);
  expect(navButton).toBeInTheDocument();
});
