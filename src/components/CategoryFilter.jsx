export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            activeCategory === category
              ? "bg-slate-900 text-white shadow-md"
              : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-slate-600 hover:border-slate-400 hover:text-slate-900 dark:hover:border-slate-400 dark:hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
