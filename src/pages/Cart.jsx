import { products } from "../data/products";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

export default function Cart({ cart, onUpdateQuantity, onRemove, onNavigate }) {
  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-7xl mb-6">🛒</p>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          Your cart is empty
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
          Looks like you haven&apos;t added anything yet. Explore our collection
          to find what you need.
        </p>
        <button
          onClick={() => onNavigate("products")}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Browse Products →
        </button>
      </div>
    );
  }

  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
        Your Cart
        <span className="text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 ml-3">
          ({totalItems} item{totalItems !== 1 ? "s" : ""})
        </span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => {
            const product = products.find((p) => p.id === item.id);
            if (!product) return null;
            return (
              <CartItem
                key={item.id}
                item={item}
                product={product}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => onNavigate("products")}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors group focus:outline-none"
            >
              <svg
                className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Continue shopping
            </button>
          </div>
        </div>

        <div>
          <OrderSummary cart={cart} products={products} />
        </div>
      </div>
    </div>
  );
}
