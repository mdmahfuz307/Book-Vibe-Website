import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg min-h-[600px] md:min-h-[700px] py-12 md:py-20 animate-fade-in">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-600/20 to-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up space-y-6 md:space-y-8">
              <div>
                <p className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2 animate-pulse">Welcome to BookHaven</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Discover Your Next
                  <span className="block bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                    Favorite Book
                  </span>
                </h1>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Explore thousands of books from various genres. Find your next literary adventure, discover hidden gems, and join a community of book lovers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/readList"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-600/50 transition-all duration-300 hover:scale-105 animate-scale-up"
                >
                  Explore Books
                  <FaArrowRight className="text-sm" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border-2 border-indigo-600 text-indigo-400 px-8 py-3 rounded-full font-semibold hover:bg-indigo-600/10 transition-all duration-300 animate-scale-up"
                  style={{ animationDelay: '0.1s' }}
                >
                  Learn More
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8 border-t border-dark-hover">
                <div className="animate-bounce-slow">
                  <p className="text-3xl font-bold text-indigo-400">1000+</p>
                  <p className="text-gray-400">Books</p>
                </div>
                <div className="animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
                  <p className="text-3xl font-bold text-pink-400">50+</p>
                  <p className="text-gray-400">Categories</p>
                </div>
                <div className="animate-bounce-slow" style={{ animationDelay: '0.4s' }}>
                  <p className="text-3xl font-bold text-amber-400">4.8★</p>
                  <p className="text-gray-400">Rating</p>
                </div>
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div className="relative animate-float hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-pink-600/5 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-dark-card to-dark-hover rounded-3xl p-8 shadow-2xl shadow-indigo-600/20">
                <div className="space-y-4">
                  {/* Book Stack Illustration */}
                  <div className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-12 bg-gradient-to-r rounded-lg transform animate-scale-up"
                        style={{
                          background: ['linear-gradient(135deg, #4f46e5, #ec4899)', 'linear-gradient(135deg, #f59e0b, #f97316)', 'linear-gradient(135deg, #8b5cf6, #ec4899)', 'linear-gradient(135deg, #06b6d4, #3b82f6)', 'linear-gradient(135deg, #10b981, #059669)'][i],
                          transform: `rotate(${(i - 2) * 3}deg) translateX(${(i - 2) * 8}px)`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;