import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ExploreModal from "./exploremodal";
import "@testing-library/jest-dom";
import React from "react"

const Modal = () => {
  return (
    <BrowserRouter>
      <ExploreModal />
    </BrowserRouter>
  );
};

test("should render the Book Card component", () => {
  render(<Modal />);
  const modal = screen.getByTestId(/exploreModal/i);
  expect(modal).toBeInTheDocument();
});

test("should have the Entrepreneurship button", () => {
  render(<Modal />);
  const button = screen.getByText(/Entrepreneurship/i);
  expect(button).toBeInTheDocument();
});
