import { render, screen } from "@testing-library/react";
import Library from "./library";
import "@testing-library/jest-dom";
import React from "react"

test("should render Library component", () => {
  render(<Library />);
  const library = screen.getByTestId(/library/i);
  expect(library).toBeInTheDocument();
});

