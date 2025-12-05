import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561e1f?w=600&h=400&fit=crop"
              alt="Bienvenidos a Mi Llanerita"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-primary">
              Bienvenidos a Mi Llanerita
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              En Mi Llanerita creemos que la auténtica carne a la llanera es un
              arte que une personas, crea momentos memorables y celebra los
              sabores tradicionales de la cocina llanera colombiana.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              Nuestro equipo de expertos parrilleros selecciona los mejores
              cortes de carne fresca para crear platos que deleitarán tu paladar
              y te transportarán a la esencia de los Llanos.
            </p>
            <Link
              to="/nosotros"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Conoce Nuestra Historia
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
