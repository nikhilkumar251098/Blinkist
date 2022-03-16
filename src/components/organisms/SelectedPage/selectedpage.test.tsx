import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SelectedPage from "./SelectedPage";
import "@testing-library/jest-dom";
import React from "react"

const MockPageContent = () => {
  return (
    <BrowserRouter>
      <SelectedPage />
    </BrowserRouter>
  );
};

test("should render Selected page component", () => {
  render(<MockPageContent />);
  const content = screen.getByTestId(/pageContent/i);
  expect(content).toBeInTheDocument();
});

test("should contain the banner", () => {
  render(<MockPageContent />);
  const content = screen.getByTestId(/banner/i);
  expect(content).toBeInTheDocument();
});

test("should contain the input field", () => {
  render(<MockPageContent />);
  const input = screen.getByAltText(/Search/i);
  expect(input).toBeInTheDocument();
});
