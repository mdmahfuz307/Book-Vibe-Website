import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook || {};

  const handleMarkAsRead = (id) => {
    // Store with Id
    // Where to store
    // array or collection
    // if boll already exist the show a alart
    // if book not exist then push in the collction or array
    // simple localStorage-backed "database"
    const markId = parseInt(id, 10);
    try {
      const raw = localStorage.getItem("readBooks");
      let readBooks = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(readBooks)) readBooks = [];

      if (readBooks.includes(markId)) {
        MySwal.fire({
          icon: "info",
          title: "Already marked",
          text: "This book is already marked as read.",
        });
        return;
      }

      readBooks.push(markId);
      localStorage.setItem("readBooks", JSON.stringify(readBooks));
      MySwal.fire({
        icon: "success",
        title: "Marked as read",
        text: `${bookName || "Book"} has been marked as read.`,
      });
    } catch (err) {
      console.error("Failed to update readBooks:", err);
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "Could not mark the book as read.",
      });
    }
  };

  return (
    <div className="w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>
      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-accent m-2"
      >
        Mark as Read
      </button>
      <button className="btn btn-info m-2">Add to WishList</button>
    </div>
  );
};

export default BookDetails;
