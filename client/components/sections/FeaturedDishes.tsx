import { FEATURED_DISHES } from "@/lib/constants";
import DishCard from "@/components/ui/DishCard";
import { Link } from "react-router-dom";

export default function FeaturedDishes() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-primary">
            Nuestros Platos Destacados
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Una selección de nuestros platos más populares, preparados con
            técnica y pasión
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FEATURED_DISHES.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/menu"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Ver Menú Completo
          </Link>
        </div>
      </div>
    </section>
  );
}
