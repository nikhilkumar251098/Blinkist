import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react"
import LibraryPage from "./librarypage";

const MockLib = () => {
  return (
    <BrowserRouter>
      <LibraryPage />
    </BrowserRouter>
  );
};

test("should render the librarypage component", () => {
  render(<MockLib />);
});