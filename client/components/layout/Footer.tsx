import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import {
  RESTAURANT_NAME,
  RESTAURANT_ADDRESS,
  RESTAURANT_EMAIL,
  RESTAURANT_PHONE,
  BUSINESS_HOURS,
  SOCIAL_MEDIA,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">{RESTAURANT_NAME}</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Cocina mediterránea contemporánea con los mejores ingredientes frescos y una experiencia culinaria excepcional.
            </p>
            <div className="flex gap-4">
              <a
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_MEDIA.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SOCIAL_MEDIA.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-accent transition-colors">
                  Menú
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="hover:text-accent transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/reservas" className="hover:text-accent transition-colors">
                  Reservas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>{RESTAURANT_PHONE}</span>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>{RESTAURANT_EMAIL}</span>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>{RESTAURANT_ADDRESS}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-playfair font-bold mb-4">Horarios</h4>
            <ul className="space-y-2 text-sm">
              {BUSINESS_HOURS.map((item, index) => (
                <li key={index}>
                  <p className="font-medium">{item.day}</p>
                  <p className="text-primary-foreground/80">{item.hours}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 {RESTAURANT_NAME}. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
