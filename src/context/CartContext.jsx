import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // بارگذاری سبد خرید از Local Storage هنگام بارگذاری اولیه
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => [
      ...prevItems,
      {
        id: product.id,
        title: product.title,
        description: product.description,
        imageUrl: product.imageUrl,
        price: product.price,
        addToCartStatus: true,
        teacher: product.teacher  // مقدار teacher اضافه شده است
      },
    ]);
  };
  
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  // استفاده از useEffect برای ذخیره‌سازی سبد خرید در Local Storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
