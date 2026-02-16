import { useState } from 'react';
import { FaDumbbell, FaHeart, FaSadTear, FaSmile } from 'react-icons/fa';
import Modal from '../Modal/Modal';

const moodMap = {
  happy: {
    label: 'Happy 😊',
    icon: <FaSmile />, 
    keywords: ['inspirational', 'humor', 'feel good', 'adventure', 'romantic']
  },
  sad: {
    label: 'Sad 😢',
    icon: <FaSadTear />,
    keywords: ['drama', 'tragedy', 'classic', 'memoir', 'literary']
  },
  motivated: {
    label: 'Motivated 💪',
    icon: <FaDumbbell />,
    keywords: ['self help', 'business', 'productivity', 'biography', 'leadership']
  },
  romantic: {
    label: 'Romantic ❤️',
    icon: <FaHeart />,
    keywords: ['romance', 'love', 'contemporary', 'women', 'relationship']
  }
};

const MoodFinder = ({ data = [] }) => {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);

  const handleSelectMood = (key) => {
    setSelectedMood(key);
    const mood = moodMap[key];
    if (!mood) return;
    const kws = mood.keywords.map((k) => k.toLowerCase());

    // simple matching: category or tags or bookName contains keyword
    const matched = data.filter((book) => {
      const hay = `${book.category} ${book.tags ? book.tags.join(' ') : ''} ${book.bookName} ${book.author}`.toLowerCase();
      return kws.some((kw) => hay.includes(kw));
    });

    setResults(matched.length ? matched : data.slice(0, 8));
    setOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gray-50 dark:bg-dark-card rounded-2xl p-8 shadow-md text-center border border-gray-200 dark:border-dark-hover">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Mood Based Book Finder</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Pick your mood and we'll recommend books that fit how you feel.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(moodMap).map((key) => (
            <button
              key={key}
              onClick={() => handleSelectMood(key)}
              className="px-6 py-3 bg-white dark:bg-dark-hover border-2 border-gray-300 dark:border-dark-hover rounded-full flex items-center gap-2 hover:border-coral hover:shadow-lg transition-all font-semibold text-gray-800 dark:text-gray-200"
            >
              <span className="text-coral text-xl">{moodMap[key].icon}</span>
              <span>{moodMap[key].label}</span>
            </button>
          ))}
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} title={selectedMood ? `Books for ${moodMap[selectedMood].label}` : 'Books'} size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((book) => (
            <div key={book.bookId} className="bg-white dark:bg-dark-card rounded-lg p-4 shadow-sm border border-gray-100 dark:border-dark-hover">
              <div className="flex items-center gap-4">
                <img src={book.image} alt={book.bookName} className="w-16 h-20 object-cover rounded" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">{book.bookName}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{book.author}</p>
                  <p className="text-sm text-coral font-semibold mt-2">${(book.rating * 3.99).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default MoodFinder;
