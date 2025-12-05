import { useState } from "react";
import { MenuItem } from "@/lib/types";

export interface CartItem extends MenuItem {
  quantity: number;
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (dish: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === dish.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prevCart, { ...dish, quantity: 1 }];
    });
  };

  const removeFromCart = (dishId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== dishId));
  };

  const updateQuantity = (dishId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === dishId ? { ...item, quantity } : item,
      ),
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const sendToWhatsApp = (whatsappNumber: string) => {
    if (cart.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    let message =
      "Hola, quisiera hacer el siguiente pedido en Mi Llanerita:\n\n";

    cart.forEach((item) => {
      message += `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toLocaleString()}\n`;
    });

    message += `\nTotal: $${getTotalPrice().toLocaleString()}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    sendToWhatsApp,
  };
}
