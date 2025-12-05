import { MenuItem } from "@/lib/types";

interface DishCardProps {
  dish: MenuItem;
}

const tagLabels: Record<string, string> = {
  vegetarian: "Vegetariano",
  "vegetarian-available": "Opción Vegetariana",
  "gluten-free": "Sin Gluten",
  "gluten-free-available": "Opción Sin Gluten",
  spicy: "Picante",
};

export default function DishCard({ dish }: DishCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2 flex-wrap justify-end">
          {dish.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full"
            >
              {tagLabels[tag] || tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-primary mb-2">
          {dish.name}
        </h3>
        <p className="text-foreground/70 text-sm mb-4">{dish.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-accent">
            €{dish.price.toFixed(2)}
          </span>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
