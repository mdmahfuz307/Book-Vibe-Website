import { Suspense, useEffect, useState } from "react";
import { FaFilter, FaSort } from "react-icons/fa";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (data) {
      setAllBooks(data);
      setFilteredBooks(data);
    } else {
      fetch("/booksData.json")
        .then((res) => res.json())
        .then((fetchedData) => {
          setAllBooks(fetchedData);
          setFilteredBooks(fetchedData);
        })
        .catch((err) => console.error('Failed to load books:', err));
    }
  }, [data]);

  useEffect(() => {
    let result = [...allBooks];

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((book) => book.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (book) =>
          book.bookName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
      result.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    } else if (sortBy === "oldest") {
      result.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
    }

    setFilteredBooks(result);
  }, [selectedCategory, sortBy, searchQuery, allBooks]);

  const categories = ["All", ...new Set(allBooks.map((book) => book.category))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white dark:bg-dark-bg">
      {/* Header */}
      <div className="mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Explore Our Library
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Discover {filteredBooks.length} amazing books
        </p>
      </div>

      {/* Filters and Search */}
      <div className="bg-gray-50 dark:bg-dark-card rounded-xl shadow-md p-6 mb-8 border border-gray-200 dark:border-dark-hover animate-slide-up">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-white dark:bg-dark-hover border-2 border-gray-300 dark:border-dark-hover text-gray-900 dark:text-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-coral focus:border-coral placeholder-gray-500 dark:placeholder-gray-400 transition"
          />
        </div>

        {/* Filter and Sort Controls */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Category Filter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaFilter className="text-coral" />
              <label className="font-bold text-gray-900 dark:text-gray-100">Category</label>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-coral text-white shadow-lg"
                      : "bg-white dark:bg-dark-hover text-gray-800 dark:text-gray-200 border-2 border-gray-300 dark:border-dark-hover hover:border-coral hover:shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaSort className="text-coral" />
              <label className="font-bold text-gray-900 dark:text-gray-100">Sort By</label>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 bg-white dark:bg-dark-hover border-2 border-gray-300 dark:border-dark-hover text-gray-900 dark:text-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-coral focus:border-coral transition cursor-pointer font-medium"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-96">
            <div className="animate-spin">
              <div className="h-12 w-12 border-4 border-coral border-t-transparent rounded-full"></div>
            </div>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks && filteredBooks.length > 0 ? (
            filteredBooks.map((singleBook) => (
              <Book key={singleBook.bookId} singlebook={singleBook} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-300">No books found matching your criteria.</p>
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
