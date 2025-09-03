import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";
import ListedBook from "./Main/listedbook/ListedBook.jsx";
import PagesToRead from "./Main/page-to-read/PagesToRead.jsx";
import Home from "./Main/home/Home.jsx";
import BookReview from "./Main/bookReview/BookReview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
        loader: async () => {
          const response = await fetch("/datas/booksdata.json");
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/listed",
        Component: ListedBook,
      },
      {
        path: "/pages-to-read",
        Component: PagesToRead,
      },
      {
        path: "/book-review/:bookPath",
        Component: BookReview,
        loader: async ({ params }) => {
          const response = await fetch(`/datas/booksdata.json`);
          const data = await response.json();
          return data.find((book) => book.bookName === params.bookPath);
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
