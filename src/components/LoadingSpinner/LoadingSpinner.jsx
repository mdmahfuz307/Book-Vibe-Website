
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-96">
      <div className="relative w-16 h-16">
        {/* Outer gradient ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 border-r-pink-600 animate-spin"></div>
        {/* Middle ring */}
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-indigo-600 animate-spin" style={{ animationDirection: 'reverse' }}></div>
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full"></div>
        </div>
      </div>
      <p className="ml-4 text-gray-600 dark:text-gray-300 font-semibold">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
