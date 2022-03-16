import { render, screen } from "@testing-library/react";
import Footer from "./footer";
import "@testing-library/jest-dom";
import React from "react"

test("should render the book detail", () => {
  render(<Footer />);
  const footer = screen.getByTestId(/footer/i);
  expect(footer).toBeInTheDocument();
});

test("should contain the logo", () => {
  render(<Footer />);
  const logo = screen.getByAltText(/Logo/i);
  expect(logo).toBeInTheDocument();
});

test("should have the title", () => {
  render(<Footer />);
  const title = screen.getByText(/Big ideas in small packages/i);
  expect(title).toBeInTheDocument();
});


