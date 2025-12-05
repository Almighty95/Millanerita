import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-playfair text-7xl font-bold mb-4 text-primary">
              404
            </h1>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Página no encontrada
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Lo sentimos, la página que estás buscando no existe o ha sido
              removida.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              <Home size={20} />
              Volver al Inicio
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
