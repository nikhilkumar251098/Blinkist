import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import BookCard from "./bookcard";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import React from "react";
import axios from "axios";

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



const MockCardGrid = () => {
  return (
    <BrowserRouter>
      <BookCard />
    </BrowserRouter>
  );
};

describe("testing Card Grid", () => {
  test("Rendering CardGrid With Books", async () => {
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
      {
        id: "2",
        img: "/images/11.png",
        bookName: "Employee to Entrepreneur",
        bookAuthor: "Steve Glaveski",
        time: "15-minute read",
        reads: "",
        status: "reading",
        type: "featured",
      },
    ];
    const resp = { data: data };
    mockedAxios.get.mockResolvedValue(Promise.resolve(resp));
    render(<MockCardGrid />);
  });
})

test("should render the Book Card component", () => {
  render(<MockCardGrid />);
  const card = screen.getByTestId(/bookCard/i);
  expect(card).toBeInTheDocument();
});
