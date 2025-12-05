import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504674900152-b8b27e3a54bc?w=1600&h=900&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4 md:px-8">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4">
          La Buena Mesa
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Cocina Mediterránea Contemporánea
        </p>
        <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
          Descubre una experiencia culinaria excepcional con los mejores
          ingredientes frescos y una gastronomía que te enamorará
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/reservas"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105"
          >
            Reservar Mesa
          </Link>
          <Link
            to="/menu"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Ver Menú
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
}
