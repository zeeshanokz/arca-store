const StarIcon = ({ filled }) => (
  <svg
    className={`h-4 w-4 ${filled ? "text-amber-400" : "text-gray-200 dark:text-slate-600"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function ProductCard({ product, onAddToCart, onViewDetail }) {
  const { id, name, category, price, rating, tagline, image } = product;

  return (
    <div
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col border border-transparent hover:border-blue-100 dark:hover:border-blue-700"
      onClick={() => onViewDetail(id)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-4/3 bg-gray-100 dark:bg-slate-700">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-slate-800 dark:text-white text-base mb-1 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-3 line-clamp-2 flex-1 leading-relaxed">
          {tagline}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < Math.round(rating)} />
            ))}
          </div>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {rating}
          </span>
        </div>

        {/* Price + Add to Cart */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(id);
            }}
            className="flex-1 bg-slate-900 hover:bg-blue-600 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-[1.03] active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
