import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookDetailView from "./BookDetailView";
import "@testing-library/jest-dom";
import axios from "axios";
import React from "react"

const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
const Library = [
  {
    id: "1",
    img: "/images/1.png",
    bookName: "Bring Your Human to Work",
    bookAuthor: "Erica Keswin",
    time: "13-minute read",
    reads: "",
    status: "reading",
    type: "trending",
  },
];

const BookDetail = () => {
  return (
    <BrowserRouter>
      <BookDetailView />
    </BrowserRouter>
  );
};

test("Rendering Book Detail with book", async () => {
  const data = [
    {
      id: "1",
      img: "/images/1.png",
      bookName: "Bring Your Human to Work",
      bookAuthor: "Erica Keswin",
      time: "13-minute read",
      reads: "",
      status: "reading",
      type: "trending",
    },
  ];
  const resp = { data: data };
  mockedAxios.get.mockResolvedValue(Promise.resolve(resp));
  render(<BookDetail />);
});

it("should render the book detail", () => {
  render(<BookDetail />);
  const bookDetail = screen.getByTestId(/bookDetail/i);
  expect(bookDetail).toBeInTheDocument();
});

test("should contain the read now button", () => {
  render(<BookDetail />);
  const button = screen.queryByText(/Read now/i);
  expect(button).toBeInTheDocument();
});

test("should contain the Finished Reading button", () => {
  render(<BookDetail />);
  const button = screen.queryByText(/Finished Reading/i);
  expect(button).toBeInTheDocument();
});

test("should contain Link tag", () => {
  render(<BookDetail />);
  const link = screen.queryByRole("link");
  expect(link).toBeInTheDocument();
});
