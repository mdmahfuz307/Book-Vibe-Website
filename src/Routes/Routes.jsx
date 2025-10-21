import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import ReadList from "../pages/ReadList/ReadList";
import Root from "../pages/Root/Root";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: "/",
        Component: Home,
  loader: () => fetch("/data/booksData.json"),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "readList",
  loader: () => fetch("/data/booksData.json"),
        Component: ReadList,
      },
      {
        path: "/bookDetails/:id",  // :id ata dyr karon dynamic route set korar jrno ekn http://localhost:5173/bookDetails/fd  mot kotha bookDetails er pot ja debo tatei oi bookDetails page ta asbe
  loader: () => fetch("/data/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
