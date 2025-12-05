import { useState } from "react";
import Layout from "@/components/layout/Layout";
import DishCard from "@/components/ui/DishCard";
import CartItemComponent from "@/components/ui/CartItem";
import { MENU_ITEMS, RESTAURANT_WHATSAPP } from "@/lib/constants";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

type Category = "acompañamientos" | "principales" | "postres" | "bebidas";

const categoryLabels: Record<Category, string> = {
  acompañamientos: "Acompañamientos",
  principales: "Platos Principales",
  postres: "Postres",
  bebidas: "Bebidas",
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
    "all",
  );
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    sendToWhatsApp,
    clearCart,
  } = useCart();

  const categories: Array<Category | "all"> = [
    "all",
    "principales",
    "acompañamientos",
    "postres",
    "bebidas",
  ];

  const filteredDishes =
    selectedCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((dish) => dish.category === selectedCategory);

  const handleSendOrder = () => {
    sendToWhatsApp(RESTAURANT_WHATSAPP.replace(/\D/g, ""));
    clearCart();
  };

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="font-playfair text-5xl font-bold mb-4 text-primary">
                  Nuestro Menú
                </h1>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  Descubre nuestra selección de platos llaneros preparados con
                  los mejores ingredientes
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category === "all" ? "Todos" : categoryLabels[category]}
                  </button>
                ))}
              </div>

              {/* Dishes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredDishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} onAddToCart={addToCart} />
                ))}
              </div>

              {filteredDishes.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-foreground/60">
                    No hay platos en esta categoría
                  </p>
                </div>
              )}
            </div>

            {/* Cart Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card rounded-xl shadow-lg border border-border overflow-hidden">
                {/* Cart Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground">
                  <div className="flex items-center gap-2 mb-1">
                    <ShoppingBag size={24} />
                    <h2 className="text-2xl font-bold">Tu Pedido</h2>
                  </div>
                  <p className="text-sm opacity-90 ml-8">
                    {getTotalItems()} {getTotalItems() === 1 ? "artículo" : "artículos"}
                  </p>
                </div>

                {/* Cart Content */}
                <div className="p-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ShoppingBag size={48} className="mx-auto mb-4 text-muted-foreground opacity-50" />
                      <p className="text-muted-foreground text-sm">
                        Tu carrito está vacío
                      </p>
                      <p className="text-xs text-muted-foreground/60 mt-2">
                        Agrega platos para comenzar tu pedido
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Cart Items */}
                      <div className="space-y-3 mb-6 max-h-96 overflow-y-auto pr-2">
                        {cart.map((item) => (
                          <CartItemComponent
                            key={item.id}
                            item={item}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeFromCart}
                          />
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="border-t border-border my-4"></div>

                      {/* Summary */}
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Subtotal:</span>
                          <span className="font-semibold text-foreground">
                            ${getTotalPrice().toLocaleString()}
                          </span>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-foreground">Total a pagar:</span>
                            <span className="text-2xl font-bold text-accent">
                              ${getTotalPrice().toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <Button
                          onClick={handleSendOrder}
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-base"
                          size="lg"
                        >
                          Completar Pedido
                        </Button>
                        <button
                          onClick={clearCart}
                          className="w-full px-4 py-3 bg-destructive/10 hover:bg-destructive/20 text-destructive rounded-lg font-semibold transition-colors"
                        >
                          Limpiar Carrito
                        </button>
                      </div>

                      {/* Note */}
                      <p className="text-xs text-muted-foreground text-center mt-4">
                        El pedido se enviará por WhatsApp
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
