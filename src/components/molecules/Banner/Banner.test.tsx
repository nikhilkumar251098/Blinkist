import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react"
import Banner from "./Banner";

test("should render the Banner component", () => {
  render(<Banner />);
  const banner = screen.getByTestId(/banner/i);
  expect(banner).toBeInTheDocument();
});

test("should contain the image", () => {
  render(<Banner />);
  const image = screen.getByAltText(/banner/i);
  expect(image).toBeInTheDocument();
});

test("should have the title", () => {
  render(<Banner />);
  const title = screen.getByText(/Explore Books on entrepreneurship/i);
  expect(title).toBeInTheDocument();
});
