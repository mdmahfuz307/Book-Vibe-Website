import { useEffect, useState } from "react";
import { FaBook, FaHeart, FaSort, FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [activeTab, setActiveTab] = useState("read");
  const [sortBy, setSortBy] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    // Load read books
    const rawReadBooks = localStorage.getItem("readBooks");
    const readBookIds = rawReadBooks ? JSON.parse(rawReadBooks) : [];
    const myReadList = data.filter((book) =>
      readBookIds.includes(book.bookId)
    );
    setReadList(myReadList);

    // Load wishlist books
    const rawWishlistBooks = localStorage.getItem("wishlistBooks");
    const wishlistIds = rawWishlistBooks ? JSON.parse(rawWishlistBooks) : [];
    const myWishList = data.filter((book) =>
      wishlistIds.includes(book.bookId)
    );
    setWishList(myWishList);
  }, [data]);

  const handleSort = (type) => {
    setSortBy(type);
    if (activeTab === "read") {
      if (type === "pages") {
        const sorted = [...readList].sort((a, b) => a.totalPages - b.totalPages);
        setReadList(sorted);
      } else if (type === "rating") {
        const sorted = [...readList].sort((a, b) => b.rating - a.rating);
        setReadList(sorted);
      } else if (type === "newest") {
        const sorted = [...readList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setReadList(sorted);
      }
    } else {
      if (type === "pages") {
        const sorted = [...wishList].sort((a, b) => a.totalPages - b.totalPages);
        setWishList(sorted);
      } else if (type === "rating") {
        const sorted = [...wishList].sort((a, b) => b.rating - a.rating);
        setWishList(sorted);
      } else if (type === "newest") {
        const sorted = [...wishList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        setWishList(sorted);
      }
    }
  };

  const handleRemoveFromRead = (bookId) => {
    const updated = readList.filter((book) => book.bookId !== bookId);
    setReadList(updated);
    const readBookIds = updated.map((book) => book.bookId);
    localStorage.setItem("readBooks", JSON.stringify(readBookIds));
  };

  const handleRemoveFromWishlist = (bookId) => {
    const updated = wishList.filter((book) => book.bookId !== bookId);
    setWishList(updated);
    const wishlistIds = updated.map((book) => book.bookId);
    localStorage.setItem("wishlistBooks", JSON.stringify(wishlistIds));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            My Library
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your reading journey
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="md:w-1/4 lg:w-1/6">
            <div className="bg-white dark:bg-dark-card rounded-2xl shadow-md overflow-hidden sticky top-24 border border-gray-200 dark:border-dark-hover">
              <div className="divide-y divide-gray-200 dark:divide-dark-hover">
                <button
                  onClick={() => {
                    setActiveTab("read");
                    setSortBy("");
                  }}
                  className={`w-full px-6 py-4 text-left font-semibold transition-all flex items-center gap-3 ${
                    activeTab === "read"
                      ? "bg-coral text-white"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-hover border-b-2 border-gray-200 dark:border-dark-hover"
                  }`}
                >
                  <FaBook className="text-lg" />
                  <div>
                    <p className="text-sm">Read Books</p>
                    <p className="text-xs font-normal opacity-75">{readList.length} books</p>
                  </div>
                </button>
                <button
                  onClick={() => {
                    setActiveTab("wish");
                    setSortBy("");
                  }}
                  className={`w-full px-6 py-4 text-left font-semibold transition-all flex items-center gap-3 ${
                    activeTab === "wish"
                      ? "bg-coral text-white"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-hover border-b-2 border-gray-200 dark:border-dark-hover"
                  }`}
                >
                  <FaHeart className="text-lg" />
                  <div>
                    <p className="text-sm">Wishlist</p>
                    <p className="text-xs font-normal opacity-75">{wishList.length} books</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Sort Options */}
            <div className="bg-white dark:bg-dark-card rounded-2xl shadow-md p-6 mt-6 border border-gray-200 dark:border-dark-hover">
              <div className="flex items-center gap-2 mb-4">
                <FaSort className="text-coral" />
                <h3 className="font-bold text-gray-900 dark:text-gray-100">Sort By</h3>
              </div>
              <div className="space-y-2">
                {["newest", "rating", "pages"].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSort(option)}
                    className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all text-left capitalize ${
                      sortBy === option
                        ? "bg-coral text-white"
                        : "bg-gray-100 dark:bg-dark-hover text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-card border-2 border-gray-300 dark:border-dark-hover"
                    }`}
                  >
                    {option === "newest" ? "Newest First" : option === "rating" ? "Highest Rated" : "By Pages"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-3/4 lg:w-5/6">
            <div className="bg-white dark:bg-dark-card rounded-2xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-dark-hover">
              {activeTab === "read" ? (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Books You've Read
                  </h2>

                  {readList && readList.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {readList.map((book) => (
                        <div key={book.bookId} className="relative group">
                          <Book singlebook={book} />
                          <button
                            onClick={() => handleRemoveFromRead(book.bookId)}
                            className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/50"
                            title="Remove from read list"
                          >
                            <FaTrash className="text-sm" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <FaBook className="text-5xl text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                      <p className="text-xl text-gray-600 dark:text-gray-300">No books in your read list yet</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">Start exploring and mark books as read!</p>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    Your Wishlist
                  </h2>

                  {wishList && wishList.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {wishList.map((book) => (
                        <div key={book.bookId} className="relative group">
                          <Book singlebook={book} />
                          <button
                            onClick={() => handleRemoveFromWishlist(book.bookId)}
                            className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/50"
                            title="Remove from wishlist"
                          >
                            <FaTrash className="text-sm" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <FaHeart className="text-5xl text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                      <p className="text-xl text-gray-600 dark:text-gray-300">No books in your wishlist yet</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-2">Add books to your wishlist to keep track of books you want to read!</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
