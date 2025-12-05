import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561e1f?w=500&h=500&fit=crop",
    title: "Carne a la Llanera",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
    title: "Carne Asada",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop",
    title: "Especialidades",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop",
    title: "Acompañamientos",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop",
    title: "Parrilla",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=500&fit=crop",
    title: "Cortes Especiales",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestra Galería
          </h2>
          <p className="text-muted-foreground text-lg">
            Explora la autenticidad de nuestra cocina llanera
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/galeria">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Ver Galería Completa
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
