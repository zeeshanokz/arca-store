import { useState } from "react";
import QuantityPicker from "../components/QuantityPicker";

const StarIcon = ({ filled }) => (
  <svg
    className={`h-5 w-5 ${filled ? "text-amber-400" : "text-gray-200 dark:text-slate-600"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-4 w-4 text-blue-500 mt-0.5 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default function ProductDetail({
  product,
  cart,
  onAddToCart,
  onNavigate,
}) {
  const [quantity, setQuantity] = useState(1);

  const cartItem = cart.find((item) => item.id === product.id);
  const inCart = Boolean(cartItem);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <button
        onClick={() => onNavigate("products")}
        className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-8 group focus:outline-none"
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
        <span className="text-sm font-medium">Back to products</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="aspect-square bg-gray-100 dark:bg-slate-800 rounded-3xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <span className="inline-flex w-fit bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-4 border border-blue-100 dark:border-blue-800">
            {product.category}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-5">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled={i < Math.round(product.rating)} />
              ))}
            </div>
            <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
              {product.rating}
            </span>
            <span className="text-slate-400 dark:text-slate-500 text-sm">
              ({product.reviews.toLocaleString()} reviews)
            </span>
          </div>

          <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-sm sm:text-base">
            {product.description}
          </p>

          <div className="mb-8">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">
              Specifications
            </h3>
            <ul className="space-y-2.5">
              {product.specs.map((spec, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                >
                  <CheckIcon />
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-100 dark:border-slate-700 pt-6">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Quantity
              </span>
              <QuantityPicker
                quantity={quantity}
                onIncrease={() => setQuantity((q) => q + 1)}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                min={1}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onAddToCart(product.id, quantity)}
                className="flex-1 bg-slate-900 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              {inCart && (
                <button
                  onClick={() => onNavigate("cart")}
                  className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-semibold py-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  View Cart ({cartItem.quantity} in cart)
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
