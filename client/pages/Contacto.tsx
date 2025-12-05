import Layout from "@/components/layout/Layout";
import GoogleMap from "@/components/ui/GoogleMap";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import {
  RESTAURANT_NAME,
  RESTAURANT_ADDRESS,
  RESTAURANT_EMAIL,
  RESTAURANT_PHONE,
  BUSINESS_HOURS,
  SOCIAL_MEDIA,
} from "@/lib/constants";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert("Gracias por tu mensaje. Nos pondremos en contacto pronto!");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-5xl font-bold text-primary mb-4">
            Contacto
          </h1>
          <p className="text-lg text-foreground/70">
            Ponte en contacto con nosotros para cualquier consulta o sugerencia
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-8 text-primary">
                Envíanos un Mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tu mensaje..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-8 text-primary">
                Información de Contacto
              </h2>

              {/* Info Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Teléfono
                    </h3>
                    <a
                      href={`tel:${RESTAURANT_PHONE}`}
                      className="text-accent hover:underline"
                    >
                      {RESTAURANT_PHONE}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${RESTAURANT_EMAIL}`}
                      className="text-accent hover:underline"
                    >
                      {RESTAURANT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Ubicación
                    </h3>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(RESTAURANT_ADDRESS)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {RESTAURANT_ADDRESS}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      Horarios
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {BUSINESS_HOURS.map((item, index) => (
                        <li key={index}>
                          <span className="font-medium text-foreground">
                            {item.day}:
                          </span>{" "}
                          <span className="text-foreground/70">{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">
                    Síguenos
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={SOCIAL_MEDIA.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                    >
                      Instagram
                    </a>
                    <a
                      href={SOCIAL_MEDIA.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                    >
                      Facebook
                    </a>
                    <a
                      href={SOCIAL_MEDIA.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-6 text-primary">
              Ubicación
            </h2>
            <GoogleMap
              address={RESTAURANT_ADDRESS}
              restaurantName={RESTAURANT_NAME}
              height="500px"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
