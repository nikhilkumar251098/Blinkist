import { render, screen } from "@testing-library/react";
import FilledButton from "./filledbutton";
import "@testing-library/jest-dom";
import React from "react"

test("should render the Filled Button", () => {
  render(<FilledButton />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should contain the label text given", () => {
  render(<FilledButton textVariant="h2" children="Button" />);
  const button = screen.getByText("Button");
  expect(button).toBeInTheDocument();
});

test("should contain the styles button", () => {
  render(<FilledButton children="Button" />);
  const button = screen.getByText("Button");
  expect(button).toBeInTheDocument();
});