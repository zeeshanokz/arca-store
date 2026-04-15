import { useState } from "react";

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const navLinks = [
  { label: "Home", page: "home" },
  { label: "Products", page: "products" },
];

export default function Navbar({
  cartCount,
  onNavigate,
  currentPage,
  darkMode,
  onToggleDark,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNav("home")}
            className="text-2xl font-extrabold tracking-[0.2em] text-white hover:text-blue-400 transition-colors duration-200 focus:outline-none"
          >
            ARCA
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`text-sm font-medium transition-all duration-200 focus:outline-none border-b-2 pb-0.5 ${
                  currentPage === link.page
                    ? "text-blue-400 border-blue-400"
                    : "text-gray-300 hover:text-blue-400 border-transparent"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav("cart")}
              className="relative flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <CartIcon />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span
                  key={cartCount}
                  className="absolute -top-2 -right-2 bg-amber-400 text-slate-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-badge-pop"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            <button
              onClick={onToggleDark}
              className="h-9 w-9 flex items-center justify-center rounded-md text-gray-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 rounded-md hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block mx-auto h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block mx-auto h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block mx-auto h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-700 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-slate-700 focus:outline-none ${
                  currentPage === link.page
                    ? "text-blue-400 bg-slate-800"
                    : "text-gray-300"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
