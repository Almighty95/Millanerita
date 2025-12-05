import Layout from "@/components/layout/Layout";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function Nosotros() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561e1f?w=600&h=600&fit=crop"
                  alt="Mi Llanerita Restaurante"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              </div>

              {/* Content */}
              <div>
                <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6">
                  Mi Llanerita
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Mi Llanerita es más que un restaurante, es una experiencia
                  culinaria que trae lo auténtico de los Llanos Orientales de
                  Colombia directamente a tu mesa.
                </p>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Somos apasionados por la carne a la llanera, preparada con las
                  mejores técnicas tradicionales y los ingredientes más frescos.
                  Cada corte, cada arepa, cada acompañamiento está hecho con
                  dedicación y amor para ofrecerte una experiencia gastronómica
                  inolvidable que celebra la riqueza culinaria de nuestra
                  región.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Nuestra misión es preservar y compartir las tradiciones
                  culinarias llaneras, manteniendo la autenticidad del sabor
                  mientras ofrecemos un servicio de calidad en un ambiente
                  acogedor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-12 text-center">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Autenticidad
                </h3>
                <p className="text-muted-foreground">
                  Respetamos las recetas y técnicas tradicionales de la cocina
                  llanera, sin comprometer en la calidad ni el sabor.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🥩</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Calidad Premium
                </h3>
                <p className="text-muted-foreground">
                  Solo utilizamos cortes de carne seleccionados, frescos y de la
                  mejor procedencia para garantizar el mejor sabor.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Pasión</h3>
                <p className="text-muted-foreground">
                  Cada plato que preparamos es hecho con dedicación y amor,
                  pensando en la satisfacción y felicidad de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-12 text-center">
              Nuestro Equipo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-accent font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
