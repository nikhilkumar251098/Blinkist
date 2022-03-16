import { render, screen } from "@testing-library/react";
import InputField from "./inputfield";
import "@testing-library/jest-dom";
import React from "react"

test("should render the Input component", () => {
  render(<InputField text="Enter text" />);
  const input = screen.getByTestId(/input/i);
  expect(input).toBeInTheDocument();
});

test("should contain the given label text", () => {
  render(<InputField text="Enter text" />);
  const input = screen.getByText(/Enter text/i);
  expect(input).toBeInTheDocument();
});
