import GoogleMap from "@/components/ui/GoogleMap";
import { RESTAURANT_NAME, RESTAURANT_ADDRESS } from "@/lib/constants";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Location() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary">
              Ubicación
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Visitanos en nuestro acogedor restaurante ubicado en el corazón
              de la ciudad. Esperamos tu llegada con los brazos abiertos.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p className="text-foreground/70">{RESTAURANT_ADDRESS}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <a
                    href="tel:+34912345678"
                    className="text-accent hover:underline"
                  >
                    +34 912 345 678
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:info@labuenamesaproperty.com"
                    className="text-accent hover:underline"
                  >
                    info@labuenamesaproperty.com
                  </a>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Ver en Google Maps
            </a>
          </div>

          {/* Map */}
          <div>
            <GoogleMap
              address={RESTAURANT_ADDRESS}
              restaurantName={RESTAURANT_NAME}
              height="500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
