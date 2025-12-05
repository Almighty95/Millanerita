import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const allGalleryImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561e1f?w=600&h=600&fit=crop",
    title: "Carne a la Llanera",
    category: "Platos Principales",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop",
    title: "Carne Asada Premium",
    category: "Platos Principales",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&h=600&fit=crop",
    title: "Pollo a la Parrilla",
    category: "Especialidades",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=600&fit=crop",
    title: "Acompañamientos Frescos",
    category: "Acompañamientos",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop",
    title: "Cortes Especiales",
    category: "Carnes",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=600&fit=crop",
    title: "Selección de Carnes",
    category: "Carnes Premium",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1582269255471-e582cdae6825?w=600&h=600&fit=crop",
    title: "Arepas Caseras",
    category: "Acompañamientos",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=600&fit=crop",
    title: "Ensalada Llanera",
    category: "Entrada",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291840?w=600&h=600&fit=crop",
    title: "Yuca Frita",
    category: "Acompañamientos",
  },
];

export default function Galeria() {
  return (
    <Layout>
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4">
              Galería de Mi Llanerita
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre la autenticidad y calidad de nuestros platos llaneros,
              preparados con los mejores ingredientes y técnicas tradicionales.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {allGalleryImages.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-6">
                  <div className="text-right">
                    <span className="inline-block text-accent text-sm font-semibold mb-2 bg-black/60 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <h3 className="text-white font-playfair font-bold text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-12 text-center text-white mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              ¿Te ha abierto el apetito?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Visita nuestro menú y realiza tu pedido ahora mismo
            </p>
            <Link to="/menu">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
              >
                Ver Menú y Ordenar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
