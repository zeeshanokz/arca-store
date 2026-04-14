import { useState, useEffect } from "react";
import { products } from "../data/products";

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("arca-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem("arca-cart", JSON.stringify(cart));
  }, [cart]);

  const showToast = (message) => {
    setToast(message);
  };

  const addToCart = (productId, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { id: productId, quantity }];
    });
    const product = products.find((p) => p.id === productId);
    if (product) showToast(`${product.name} added to cart`);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        ),
      );
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cart,
    cartCount,
    toast,
    setToast,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
}
