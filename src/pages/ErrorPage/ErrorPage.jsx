import { FaArrowLeft, FaBook, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg flex items-center justify-center px-4 animate-fade-in">
      <div className="text-center max-w-2xl">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[150px] font-black text-coral animate-pulse-glow">
            404
          </h1>
        </div>

        {/* Icon */}
        <div className="mb-8">
          <div className="inline-block bg-coral p-6 rounded-full text-white text-5xl shadow-lg shadow-coral/30 animate-bounce-slow">
            <FaBook />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted. Let's get you back to where the books are!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-hover text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-coral/30 transition-all hover:scale-105 animate-scale-up"
          >
            <FaHome /> Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border-2 border-coral text-coral px-8 py-3 rounded-full font-semibold hover:bg-coral/10 transition-all animate-scale-up"
            style={{ animationDelay: '0.1s' }}
          >
            <FaArrowLeft /> Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-hover">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Here are some helpful links instead:</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link to="/" className="text-coral hover:text-coral-hover font-semibold transition-colors">
              Home
            </Link>
            <Link to="/readList" className="text-coral hover:text-coral-hover font-semibold transition-colors">
              Browse Books
            </Link>
            <Link to="/about" className="text-coral hover:text-coral-hover font-semibold transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;