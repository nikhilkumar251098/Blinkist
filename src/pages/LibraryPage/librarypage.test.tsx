import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react"
import LibraryPage from "./librarypage";

test("should render the librarypage component", () => {
  render(<LibraryPage />);
});