import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=600&h=400&fit=crop"
              alt="Bienvenidos a La Buena Mesa"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-primary">
              Bienvenidos a La Buena Mesa
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              En La Buena Mesa creemos que la gastronomía es un arte que une
              personas, crea momentos memorables y celebra los sabores
              auténticos de la cocina mediterránea.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              Nuestro equipo de expertos selecciona los mejores ingredientes
              locales y frescos para crear platos que deleitarán tu paladar y
              enriquecerán tu experiencia culinaria.
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
