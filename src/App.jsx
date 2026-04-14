import { useState, useCallback, useEffect } from "react";
import { products } from "./data/products";
import { useCart } from "./hooks/useCart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const {
    cart,
    cartCount,
    toast,
    setToast,
    addToCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const navigate = (page, productId = null) => {
    setCurrentPage(page);
    setSelectedProductId(productId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedProduct = selectedProductId
    ? products.find((p) => p.id === selectedProductId)
    : null;

  const handleCloseToast = useCallback(() => setToast(null), [setToast]);

  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("arca-dark") === "true";
    } catch {
      return false;
    }
  });
  const toggleDarkMode = useCallback(() => setDarkMode((d) => !d), []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("arca-dark", String(darkMode));
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex flex-col font-sans transition-colors duration-300">
      <Navbar
        cartCount={cartCount}
        onNavigate={navigate}
        currentPage={currentPage}
        darkMode={darkMode}
        onToggleDark={toggleDarkMode}
      />

      <main className="flex-1">
        <div key={currentPage} className="animate-page-in">
          {currentPage === "home" && (
            <Home onNavigate={navigate} onAddToCart={addToCart} />
          )}
          {currentPage === "products" && (
            <Products
              onAddToCart={addToCart}
              onViewDetail={(id) => navigate("product-detail", id)}
            />
          )}
          {currentPage === "product-detail" && selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              cart={cart}
              onAddToCart={addToCart}
              onNavigate={navigate}
            />
          )}
          {currentPage === "cart" && (
            <Cart
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
              onNavigate={navigate}
            />
          )}
        </div>
      </main>

      <Footer onNavigate={navigate} />

      {toast && <Toast message={toast} onClose={handleCloseToast} />}
    </div>
  );
}

export default App;
