import { useState } from "react";
import Layout from "@/components/layout/Layout";
import DishCard from "@/components/ui/DishCard";
import { MENU_ITEMS } from "@/lib/constants";

type Category = "entradas" | "principales" | "postres" | "bebidas";

const categoryLabels: Record<Category, string> = {
  entradas: "Entradas",
  principales: "Platos Principales",
  postres: "Postres",
  bebidas: "Bebidas",
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");

  const categories: Array<Category | "all"> = [
    "all",
    "entradas",
    "principales",
    "postres",
    "bebidas",
  ];

  const filteredDishes =
    selectedCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((dish) => dish.category === selectedCategory);

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl font-bold mb-4 text-primary">
              Nuestro Menú
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Descubre nuestra selección de platos preparados con los mejores
              ingredientes frescos
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
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
      </section>
    </Layout>
  );
}
