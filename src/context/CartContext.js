'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getProductById } from '@/data/products';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('nordicpep-cart');
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {}
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('nordicpep-cart', JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const addItem = useCallback((productId, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing) {
        return prev.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: productId, quantity }];
    });
    setIsDrawerOpen(true);
  }, []);

  const removeItem = useCallback((productId) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const cartProducts = items.map((item) => {
    const product = getProductById(item.id);
    return product ? { ...product, quantity: item.quantity } : null;
  }).filter(Boolean);

  const subtotal = cartProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const getShippingCost = (country = 'Sweden') => {
    if (country === 'Sweden') {
      return subtotal >= 500 ? 0 : 49;
    }
    return 99;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        cartProducts,
        itemCount,
        subtotal,
        getShippingCost,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isDrawerOpen,
        setIsDrawerOpen,
        isLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
