export default function QuantityPicker({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
}) {
  return (
    <div className="flex items-center gap-1 bg-gray-100 dark:bg-slate-700 rounded-xl p-1 w-fit">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="h-8 w-8 flex items-center justify-center rounded-lg bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold text-lg shadow-sm hover:bg-blue-50 dark:hover:bg-slate-500 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="w-9 text-center text-slate-900 dark:text-white font-semibold text-sm select-none">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="h-8 w-8 flex items-center justify-center rounded-lg bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold text-lg shadow-sm hover:bg-blue-50 dark:hover:bg-slate-500 hover:text-blue-600 transition-all duration-150"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
