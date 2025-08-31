import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";
import ListedBook from "./Main/listedbook/ListedBook.jsx";
import PagesToRead from "./Main/page-to-read/PagesToRead.jsx";
import Home from "./Main/home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/listed",
        Component: ListedBook,
      },
      {
        path: "/pages-to-read",
        Component: PagesToRead,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
