const BookHavenLogo = ({ size = 32, className = "" }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Book pages */}
      <rect x="6" y="4" width="10" height="14" rx="1" fill="#6366f1" opacity="0.8" />
      <rect x="6" y="4" width="10" height="14" rx="1" stroke="#ec4899" strokeWidth="1.5" fill="none" />
      
      {/* Book spine/center */}
      <rect x="15" y="4" width="2" height="14" fill="#ec4899" />
      
      {/* Second book */}
      <rect x="18" y="6" width="10" height="12" rx="1" fill="#f59e0b" opacity="0.7" />
      <rect x="18" y="6" width="10" height="12" rx="1" stroke="#6366f1" strokeWidth="1.5" fill="none" />
      
      {/* Roof/House roof shape */}
      <path d="M 4 24 L 16 16 L 28 24" stroke="#ec4899" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* House base */}
      <rect x="6" y="24" width="20" height="4" rx="0.5" fill="#6366f1" opacity="0.2" stroke="#6366f1" strokeWidth="1.5" />
      
      {/* Door */}
      <rect x="14" y="24" width="4" height="4" rx="0.5" fill="#ec4899" opacity="0.6" />
      
      {/* Light glow effect */}
      <circle cx="16" cy="16" r="3" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.5" />
      <circle cx="16" cy="16" r="4" fill="none" stroke="#6366f1" strokeWidth="0.3" opacity="0.3" />
    </svg>
  );
};

export default BookHavenLogo;
