import { FaArrowLeft, FaBook, FaCalendar, FaCheckCircle, FaHeart, FaShare, FaStar, FaUser } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);

  if (!singleBook) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-xl text-gray-600">Book not found</p>
      </div>
    );
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (id) => {
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
          confirmButtonColor: '#FF7A6B',
        });
        return;
      }

      readBooks.push(markId);
      localStorage.setItem("readBooks", JSON.stringify(readBooks));
      MySwal.fire({
        icon: "success",
        title: "Marked as read",
        text: `${bookName} has been marked as read.`,
        confirmButtonColor: '#FF7A6B',
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

  const handleAddToWishlist = (id) => {
    const wishId = parseInt(id, 10);
    try {
      const raw = localStorage.getItem("wishlistBooks");
      let wishlistBooks = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(wishlistBooks)) wishlistBooks = [];

      if (wishlistBooks.includes(wishId)) {
        MySwal.fire({
          icon: "info",
          title: "Already in wishlist",
          text: "This book is already in your wishlist.",
          confirmButtonColor: '#FF7A6B',
        });
        return;
      }

      wishlistBooks.push(wishId);
      localStorage.setItem("wishlistBooks", JSON.stringify(wishlistBooks));
      MySwal.fire({
        icon: "success",
        title: "Added to wishlist",
        text: `${bookName} has been added to your wishlist.`,
        confirmButtonColor: '#FF7A6B',
      });
    } catch (err) {
      console.error("Failed to update wishlist:", err);
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "Could not add the book to wishlist.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/readList"
          className="inline-flex items-center gap-2 text-coral hover:text-coral-hover font-semibold mb-8 transition-colors"
        >
          <FaArrowLeft /> Back to Books
        </Link>

        {/* Book Details Container */}
        <div className="bg-white dark:bg-dark-card rounded-3xl shadow-md overflow-hidden border border-gray-200 dark:border-dark-hover">
          <div className="grid md:grid-cols-5 gap-8 p-6 md:p-12">
            {/* Left: Book Image */}
            <div className="md:col-span-2 flex flex-col items-center justify-start">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-coral/10 to-coral/5 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white dark:bg-dark-hover rounded-3xl p-6 shadow-md border-2 border-gray-200 dark:border-dark-hover">
                  <img
                    src={image}
                    alt={bookName}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 w-full mt-8">
                <div className="bg-white dark:bg-dark-hover rounded-xl p-4 text-center border-2 border-gray-300 dark:border-dark-hover">
                  <p className="text-2xl font-bold text-coral">{rating}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300 flex items-center justify-center gap-1 mt-1">
                    <FaStar className="text-amber-400" /> Rating
                  </p>
                </div>
                <div className="bg-white dark:bg-dark-hover rounded-xl p-4 text-center border-2 border-gray-300 dark:border-dark-hover">
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{totalPages}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Pages</p>
                </div>
                <div className="bg-white dark:bg-dark-hover rounded-xl p-4 text-center border-2 border-gray-300 dark:border-dark-hover">
                  <p className="text-2xl font-bold text-coral">{yearOfPublishing}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">Year</p>
                </div>
              </div>
            </div>

            {/* Right: Book Info */}
            <div className="md:col-span-3 flex flex-col justify-between">
              {/* Title and Author */}
              <div>
                <div className="inline-block bg-coral text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {category}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {bookName}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 flex items-center gap-2">
                  <FaUser className="text-coral" />
                  by <span className="font-semibold text-gray-900 dark:text-gray-100">{author}</span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-dark-hover text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium border-2 border-gray-300 dark:border-dark-hover"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Book Details */}
                <div className="bg-gray-50 dark:bg-dark-hover rounded-2xl p-6 mb-8 space-y-3 border-2 border-gray-300 dark:border-dark-hover">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 dark:text-gray-100 font-bold flex items-center gap-2">
                      <FaBook className="text-coral" /> Publisher
                    </span>
                    <span className="text-gray-800 dark:text-gray-300">{publisher}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 dark:text-gray-100 font-bold flex items-center gap-2">
                      <FaCalendar className="text-coral" /> Published
                    </span>
                    <span className="text-gray-800 dark:text-gray-300">{yearOfPublishing}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 dark:text-gray-100 font-bold flex items-center gap-2">
                      <FaBook className="text-coral" /> Pages
                    </span>
                    <span className="text-gray-800 dark:text-gray-300">{totalPages}</span>
                  </div>
                </div>

                {/* Review */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">About this book</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                    {review}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleMarkAsRead(id)}
                  className="flex-1 bg-coral hover:bg-coral-hover text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-coral/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 animate-scale-up"
                >
                  <FaCheckCircle /> Mark as Read
                </button>
                <button
                  onClick={() => handleAddToWishlist(id)}
                  className="flex-1 border-2 border-coral text-coral px-6 py-3 rounded-xl font-semibold hover:bg-coral/10 transition-all duration-300 flex items-center justify-center gap-2 animate-scale-up"
                  style={{ animationDelay: '0.1s' }}
                >
                  <FaHeart /> Add to Wishlist
                </button>
                <button className="flex-1 bg-gray-100 dark:bg-dark-hover text-gray-800 dark:text-gray-200 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-dark-card transition-all duration-300 flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-dark-hover animate-scale-up"
                  style={{ animationDelay: '0.2s' }}>
                  <FaShare /> Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Books Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 animate-fade-in">You might also like</h2>
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-md p-8 text-center border border-gray-200 dark:border-dark-hover">
            <p className="text-gray-600 dark:text-gray-300">Explore more books to find your next favorite</p>
            <Link
              to="/readList"
              className="inline-block mt-4 bg-coral hover:bg-coral-hover text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-coral/30 transition-all"
            >
              Browse All Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
