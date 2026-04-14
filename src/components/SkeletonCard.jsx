export default function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-[4/3] bg-gray-200 dark:bg-slate-700" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded-lg w-3/4" />
        <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-lg w-full" />
        <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-lg w-2/3" />
        <div className="flex gap-1 pt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-4 w-4 bg-gray-200 dark:bg-slate-700 rounded"
            />
          ))}
        </div>
        <div className="flex justify-between items-center pt-1">
          <div className="h-6 bg-gray-200 dark:bg-slate-700 rounded-lg w-16" />
          <div className="h-9 bg-gray-200 dark:bg-slate-700 rounded-xl w-28" />
        </div>
      </div>
    </div>
  );
}
