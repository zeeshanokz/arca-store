import QuantityPicker from "./QuantityPicker";

export default function CartItem({
  item,
  product,
  onUpdateQuantity,
  onRemove,
}) {
  const lineTotal = (product.price * item.quantity).toFixed(2);

  return (
    <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl object-cover shrink-0 bg-gray-100 dark:bg-slate-700"
      />

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-slate-800 dark:text-white text-sm sm:text-base truncate">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          {product.category}
        </p>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
          ${product.price.toFixed(2)} each
        </p>
      </div>

      {/* Quantity + Total + Remove */}
      <div className="flex flex-col items-end gap-2.5 shrink-0">
        <QuantityPicker
          quantity={item.quantity}
          onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
          onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
          min={0}
        />
        <span className="text-base font-bold text-slate-900 dark:text-white">
          ${lineTotal}
        </span>
        <button
          onClick={() => onRemove(item.id)}
          className="text-xs text-red-400 hover:text-red-600 transition-colors font-medium focus:outline-none"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
