import { render, screen } from '@testing-library/react';
import Library from './components/organisms/Library/library';
import "@testing-library/jest-dom";
import React from "react"

test('renders learn react link', () => {
  render(<Library />);
  const linkElement = screen.getByText(/library/i);
  expect(linkElement).toBeInTheDocument();
});
