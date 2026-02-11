import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import ReadList from "../pages/ReadList/ReadList.jsx";
import BookDetails from "../pages/BookDetails/BookDetails.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";

// Loader to fetch books data from public folder
const fetchBooksData = async () => {
  const res = await fetch("/booksData.json"); // public/booksData.json
  if (!res.ok) throw new Error("Failed to load books data");
  return res.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,       // Default route "/"
        Component: Home,
        loader: fetchBooksData,
      },
      {
        path: "about",     // "/about"
        Component: About,
      },
      {
        path: "readList",  // "/readList"
        Component: ReadList,
        loader: fetchBooksData,
      },
      {
        path: "bookDetails/:id", // "/bookDetails/:id"
        Component: BookDetails,
        loader: fetchBooksData,
      },
    ],
  },
]);
