import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const stats = [
  ["12,000+", "Happy customers"],
  ["50+", "Premium products"],
  ["4.8 / 5", "Average rating"],
  ["30 days", "Free returns"],
];

export default function Home({ onNavigate, onAddToCart }) {
  const featured = products.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-150 h-150 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-87.5 h-87.5 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-blue-600/30 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Premium Workspace Gear
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Elevate Your
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                {" "}
                Workspace.
              </span>
              <br />
              Own Your Flow.
            </h1>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
              Precision-engineered keyboards, mice, audio, and accessories
              designed for people who take their craft seriously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate("products")}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
              >
                Shop All Products →
              </button>
              <button
                onClick={() => onNavigate("cart")}
                className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 focus:outline-none text-center"
              >
                View Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map(([value, label]) => (
              <div key={label}>
                <div className="text-xl sm:text-2xl font-extrabold">
                  {value}
                </div>
                <div className="text-blue-200 text-xs sm:text-sm mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Featured Products
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm sm:text-base">
              Our most-loved picks this season
            </p>
          </div>
          <button
            onClick={() => onNavigate("products")}
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors hover:underline focus:outline-none shrink-0 ml-4"
          >
            View all →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetail={(id) => onNavigate("product-detail", id)}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative overflow-hidden bg-slate-900 rounded-3xl px-8 py-14 sm:py-20 text-center text-white">
          <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to build your perfect workspace?
            </h2>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto text-sm sm:text-base">
              Browse the full collection — from mechanical keyboards to cables.
              Free shipping over $99.
            </p>
            <button
              onClick={() => onNavigate("products")}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Explore All Products →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
