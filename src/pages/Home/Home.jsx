import { FaArrowRight, FaBook, FaDragon, FaFeather, FaStar, FaWandMagicSparkles } from "react-icons/fa6";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import MoodFinder from '../../components/MoodFinder/MoodFinder';
import Books from "../Books/Books";

const Home = () => {
  const data = useLoaderData();

  // Get top rated books
  const topRatedBooks = data.slice().sort((a, b) => b.rating - a.rating).slice(0, 6);

  // Get trending books (newest)
  const trendingBooks = data.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing).slice(0, 6);
  
  // Featured authors
  const authors = [
    { name: 'Sarah Johnson', books: 12, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { name: 'Mark Smith', books: 8, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    { name: 'Emma Wilson', books: 15, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    { name: 'David Lee', books: 10, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
    { name: 'Lisa Chen', books: 9, image: 'https://images.unsplash.com/photo-1517520473592-f71c4a3e3b08?w=100&h=100&fit=crop' },
    { name: 'John Davis', books: 11, image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
  ];

  // Testimonials
  const testimonials = [
    { name: 'Alex Turner', role: 'Book Enthusiast', text: 'BookHaven has completely changed how I discover books. The recommendations are spot on!' },
    { name: 'Jessica Brown', role: 'Student', text: 'Love the interface! Finding books for my courses has never been easier.' },
    { name: 'Michael Davis', role: 'Publisher', text: 'Great platform to showcase our latest releases. Highly recommended!' },
  ];

  // Define categories with icons
  const categories = [
    { name: 'Fiction', icon: <FaBook />, color: 'from-blue-600', count: 12 },
    { name: 'Fantasy', icon: <FaDragon />, color: 'from-purple-600', count: 8 },
    { name: 'Classic', icon: <FaFeather />, color: 'from-rose-600', count: 15 },
    { name: 'Mystery', icon: <FaWandMagicSparkles />, color: 'from-amber-600', count: 10 },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Banner />
      </div>

      {/* Top Selling Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-block bg-coral text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                Top Selling
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                Best Sellers
              </h2>
            </div>
            <Link
              to="/readList"
              className="hidden md:flex items-center gap-2 text-coral hover:text-coral-hover font-semibold transition-colors"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {topRatedBooks.slice(0, 6).map((book) => (
              <div key={book.bookId} className="group">
                <Book singlebook={book} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="bg-white dark:from-dark-card dark:to-dark-bg px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-block bg-coral text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                Featured Collection
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                Featured Books
              </h2>
            </div>
            <Link
              to="/readList"
              className="hidden md:flex items-center gap-2 text-coral hover:text-coral-hover font-semibold transition-colors"
            >
              View All <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingBooks.slice(0, 3).map((book) => (
              <Link
                key={book.bookId}
                to={`/bookDetails/${book.bookId}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative overflow-hidden bg-slate-100 aspect-square flex items-center justify-center">
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-coral text-white px-3 py-1 rounded-full text-xs font-bold">
                    {book.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg line-clamp-2 text-gray-900 group-hover:text-coral transition-colors">
                    {book.bookName}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-4">{book.author}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-hover">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-coral" size={16} />
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{book.rating}</span>
                    </div>
                    <span className="text-coral font-bold text-sm">${(book.rating * 3.99).toFixed(2)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-block bg-coral text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                Explore
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                Top Categories
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/readList"
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all p-8 text-center min-h-40 flex flex-col items-center justify-center hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} to-pink-600 opacity-85 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative z-10 text-white">
                  <div className="text-4xl mb-3 inline-block">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-white/90 text-sm">{category.count} books</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Authors Section */}
      <section className="bg-slate-50 dark:bg-dark-card px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-coral text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
              Featured
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Featured Authors</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Explore works by our most popular authors</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {authors.map((author, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="mb-4 relative inline-block">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-24 h-24 rounded-full object-cover shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all"
                  />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-coral transition-colors">{author.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{author.books} books</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mood Finder */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-dark-bg">
        <MoodFinder data={data} />
      </section>

      {/* Testimonials Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-coral text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
              Reviews
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">What Our Readers Say</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Join thousands of happy book lovers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-dark-card rounded-xl shadow-md p-6 border-t-4 border-coral">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-coral" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Find Your Next Great Read
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Discover ratings, reviews, and recommendations from our community of passionate readers.
          </p>
          <Link
            to="/readList"
            className="inline-block bg-coral hover:bg-coral-hover text-white px-8 py-3 rounded-lg font-bold transition-all hover:scale-105"
          >
            Browse All Books
          </Link>
        </div>
      </section>

      {/* All Books Section */}
      <div className="bg-white dark:bg-dark-bg">
        <Books data={data} />
      </div>
    </div>
  );
};

import Book from "../Book/Book";

export default Home;
