import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react"
import TypographyComponent from "./TypographyComponent";

test("should render Typography", () => {
  const onClick = jest.fn();
  render(<TypographyComponent variant="h1" children="Heading"  width="10px" onClick={onClick}/>);
  const typography = screen.getByTestId(/typography/i);
  fireEvent.click(typography)
  expect(onClick).toHaveBeenCalledTimes(1);
});

test("should have the given text displayed", () => {
  render(<TypographyComponent variant="h1" children="Heading" />);
  const typography = screen.getByTestId(/typography/i);
  expect(typography.textContent).toBe("Heading");
});
test("should  check the onclick", () => {
  render(<TypographyComponent variant="h1" children="Heading" />);
  const typography = screen.getByTestId(/typography/i);
  expect(typography.textContent).toBe("Heading");
});