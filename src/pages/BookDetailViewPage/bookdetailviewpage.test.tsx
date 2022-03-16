import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react"
import BookDetailViewPage from "./bookdetailviewpage";

test("should render the book detail component", () => {
  render(<BookDetailViewPage />);
});