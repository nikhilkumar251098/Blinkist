import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react"
import EnterpreneurshipPage from "./EnterpreneurshipPage";

test("should render the entrepreneurship component", () => {
  render(<EnterpreneurshipPage />);
});