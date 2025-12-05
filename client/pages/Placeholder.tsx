import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-playfair text-5xl font-bold mb-6 text-primary">
              {title}
            </h1>
            <p className="text-xl text-foreground/70 mb-8">{description}</p>

            <div className="bg-muted rounded-lg p-8 mb-8">
              <p className="text-lg text-foreground/60 mb-4">
                Esta sección está siendo preparada con cuidado. Vuelve pronto
                para descubrir contenido emocionante.
              </p>
              <p className="text-foreground/50">
                Mientras tanto, te invitamos a explorar nuestro menú y hacer
                una reserva.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Volver al Inicio
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Ver Menú
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
