import { FaBook, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-dark-card text-gray-300 dark:text-gray-300 pt-16 pb-8 mt-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-coral p-2 rounded-lg hover:shadow-md hover:shadow-coral/50 transition-all animate-pulse">
                <FaBook className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-white dark:text-coral">BookHaven</span>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-400 mb-4">
              Discover, explore, and fall in love with books. Join thousands of book lovers in our community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-coral transition-colors">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="hover:text-coral transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="hover:text-coral transition-colors">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="hover:text-coral transition-colors">
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 dark:text-gray-300 hover:text-coral transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/readList" className="text-gray-300 dark:text-gray-300 hover:text-coral transition-colors">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 dark:text-gray-300 hover:text-coral transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-coral transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-coral transition-colors">
                  Fiction
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-coral transition-colors">
                  Fantasy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-coral transition-colors">
                  Classic
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-300 hover:text-coral transition-colors">
                  Mystery
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white dark:text-gray-100 font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 dark:text-gray-400 mb-4">
              Subscribe to get the latest book recommendations and updates.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-slate-800 dark:bg-dark-hover border border-slate-700 dark:border-dark-card rounded-lg focus:outline-none focus:ring-2 focus:ring-coral text-white dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-coral hover:bg-coral-hover text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 dark:border-dark-hover my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {currentYear} BookHaven. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-coral transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-coral transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-coral transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;