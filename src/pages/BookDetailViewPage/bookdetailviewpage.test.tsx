import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react"
import BookDetailViewPage from "./bookdetailviewpage";

const MockBook = () => {
  return (
    <BrowserRouter>
      <BookDetailViewPage />
    </BrowserRouter>
  );
};

test("should render the book detail component", () => {
  render(<MockBook />);
});