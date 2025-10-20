import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/Home/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: 'readList',
        Component: ReadList,
      },
      {
        path: "/bookDetails/:id", // :id ata dyr karon dynamic route set korar jrno ekn http://localhost:5173/bookDetails/fd  mot kotha bookDetails er pot ja debo tatei oi bookDetails page ta asbe
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);