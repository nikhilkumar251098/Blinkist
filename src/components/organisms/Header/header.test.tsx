import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./header";
import "@testing-library/jest-dom";
import React from "react"

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

test("should render Header component", () => {
  render(<MockHeader />);
  const header = screen.getByTestId(/header/i);
  expect(header).toBeInTheDocument();
});

test("should contain logo", () => {
  render(<MockHeader />);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});

test("should have explore button", () => {
  render(<MockHeader />);
  const explore = screen.getByText(/Explore/i);
  expect(explore).toBeInTheDocument();
});
