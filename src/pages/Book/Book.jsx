import { FaBook, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ singlebook }) => {
  const {
    bookName,
    author,
    bookId,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
  } = singlebook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="group bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer h-full flex flex-col border border-gray-100 dark:border-dark-hover animate-fade-in">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-dark-hover dark:to-dark-hover h-64 flex items-center justify-center flex-shrink-0">
          <img
            src={image}
            alt={bookName}
            className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300"
          />
          {/* Top Rated Badge */}
          {rating >= 4.5 && (
            <div className="absolute top-3 right-3 bg-coral text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              Top Rated
            </div>
          )}
          {/* Heart Icon */}
          <button className="absolute top-3 left-3 bg-white dark:bg-dark-hover rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg hover:bg-coral hover:text-white text-coral dark:text-coral">
            <FaHeart className="text-lg" />
          </button>
        </div>

        {/* Content Container */}
        <div className="p-4 md:p-5 flex flex-col justify-between flex-grow">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 dark:bg-dark-hover text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title and Author */}
          <div className="mb-3 flex-grow">
            <h3 className="font-bold text-lg line-clamp-2 text-gray-900 dark:text-gray-100 group-hover:text-coral transition-colors">
              {bookName}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">by {author}</p>
          </div>

          {/* Footer Info */}
          <div className="border-t border-gray-200 dark:border-dark-hover pt-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <FaStar className="text-coral" size={16} />
              <span className="font-semibold text-gray-900 dark:text-gray-100">{rating}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">({yearOfPublishing})</span>
            </div>
            <button className="bg-coral text-white p-2 rounded-full hover:bg-coral-hover hover:shadow-lg transition-all opacity-0 group-hover:opacity-100">
              <FaBook className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
