import { useState } from "react";
import Layout from "@/components/layout/Layout";
import DishCard from "@/components/ui/DishCard";
import { MENU_ITEMS, RESTAURANT_WHATSAPP } from "@/lib/constants";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type Category = "acompañamientos" | "principales" | "postres" | "bebidas";

const categoryLabels: Record<Category, string> = {
  acompañamientos: "Acompañamientos",
  principales: "Platos Principales",
  postres: "Postres",
  bebidas: "Bebidas",
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, sendToWhatsApp, clearCart } = useCart();

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
                  Descubre nuestra selección de platos llaneros preparados con los
                  mejores ingredientes
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
                  <DishCard
                    key={dish.id}
                    dish={dish}
                    onAddToCart={addToCart}
                  />
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
              <div className="sticky top-24 bg-card rounded-xl shadow-lg p-6 border border-border">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-6">
                  Tu Pedido
                </h2>

                {cart.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    Tu carrito está vacío
                  </p>
                ) : (
                  <>
                    {/* Cart Items */}
                    <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start justify-between p-3 bg-muted/30 rounded-lg"
                        >
                          <div className="flex-1">
                            <p className="font-semibold text-sm text-foreground">
                              {item.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              ${item.price.toLocaleString()} c/u
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(item.id, parseInt(e.target.value))
                              }
                              className="w-12 h-8 text-center border border-border rounded text-sm"
                            />
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 text-destructive hover:bg-destructive/10 rounded transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border my-4"></div>

                    {/* Total */}
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Items:</span>
                        <span className="font-semibold">{getTotalItems()}</span>
                      </div>
                      <div className="flex justify-between text-lg">
                        <span className="font-bold text-foreground">Total:</span>
                        <span className="font-bold text-accent text-xl">
                          ${getTotalPrice().toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-2">
                      <Button
                        onClick={handleSendOrder}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
                        size="lg"
                      >
                        Hacer Pedido
                      </Button>
                      <button
                        onClick={clearCart}
                        className="w-full px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-semibold transition-colors"
                      >
                        Limpiar Carrito
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
