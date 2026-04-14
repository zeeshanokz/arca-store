import { useState } from "react";

const FREE_SHIPPING_THRESHOLD = 99;

function CheckoutModal({ total, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-sm p-8 text-center animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="h-8 w-8 text-green-500"
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
        </div>

        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
          Order Confirmed!
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">
          Thank you for your purchase.
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
          Total charged:{" "}
          <span className="font-bold text-slate-900 dark:text-white">
            ${total.toFixed(2)}
          </span>
        </p>

        <div className="space-y-2 text-left bg-gray-50 dark:bg-slate-700 rounded-2xl p-4 mb-6 text-xs text-slate-500 dark:text-slate-400">
          <p>📦 Estimated delivery: 3 – 5 business days</p>
          <p>📧 Confirmation email sent to your inbox</p>
          <p>🔄 Free returns within 30 days</p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-slate-900 hover:bg-blue-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default function OrderSummary({ cart, products }) {
  const [showModal, setShowModal] = useState(false);
  const subtotal = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 lg:sticky lg:top-24">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
        Order Summary
      </h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
          <span className="font-medium text-slate-900 dark:text-white">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600 dark:text-slate-400">Shipping</span>
          {shipping === 0 ? (
            <span className="font-medium text-green-600">Free</span>
          ) : (
            <span className="font-medium text-slate-900 dark:text-white">
              ${shipping.toFixed(2)}
            </span>
          )}
        </div>

        {shipping > 0 && (
          <p className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-2.5">
            Add ${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free
            shipping
          </p>
        )}

        <div className="border-t border-gray-100 dark:border-slate-700 pt-4 flex justify-between items-center">
          <span className="font-bold text-slate-900 dark:text-white">
            Total
          </span>
          <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Checkout →
      </button>

      <p className="text-xs text-center text-slate-400 mt-4 leading-relaxed">
        Secure checkout · Free returns within 30 days
      </p>

      {showModal && (
        <CheckoutModal total={total} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
