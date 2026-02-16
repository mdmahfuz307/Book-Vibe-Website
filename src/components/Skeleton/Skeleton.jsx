const BookCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-md">
      <div className="bg-slate-200 dark:bg-dark-hover aspect-square animate-pulse"></div>
      <div className="p-5 space-y-3">
        <div className="bg-slate-200 dark:bg-dark-hover h-4 rounded animate-pulse"></div>
        <div className="bg-slate-200 dark:bg-dark-hover h-4 rounded w-3/4 animate-pulse"></div>
        <div className="flex justify-between pt-2">
          <div className="bg-slate-200 dark:bg-dark-hover h-4 rounded w-1/4 animate-pulse"></div>
          <div className="bg-slate-200 dark:bg-dark-hover h-4 rounded w-1/4 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

const GridSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {[...Array(count)].map((_, i) => (
        <BookCardSkeleton key={i} />
      ))}
    </div>
  );
};

const ListSkeleton = ({ count = 3 }) => {
  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-6 shadow-md space-y-3">
          <div className="bg-slate-200 h-4 rounded w-3/4 animate-pulse"></div>
          <div className="bg-slate-200 h-4 rounded w-1/2 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export { BookCardSkeleton, GridSkeleton, ListSkeleton };

