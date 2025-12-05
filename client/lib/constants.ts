export const RESTAURANT_NAME = "La Buena Mesa";
export const RESTAURANT_TAGLINE = "Cocina Mediterránea Contemporánea";
export const RESTAURANT_PHONE = "+34 912 345 678";
export const RESTAURANT_WHATSAPP = "+34 612 345 678";
export const RESTAURANT_EMAIL = "info@labuenamesaproperty.com";
export const RESTAURANT_ADDRESS = "Calle Gran Vía 42, Madrid, España";

export const BUSINESS_HOURS = [
  { day: "Lunes", hours: "Cerrado" },
  { day: "Martes - Domingo", hours: "12:00 - 23:00" },
  { day: "Festivos", hours: "13:00 - 23:00" },
];

export const SOCIAL_MEDIA = {
  instagram: "https://instagram.com/labuenamesarestaurant",
  facebook: "https://facebook.com/labuenamesarestaurant",
  twitter: "https://twitter.com/labuenamesarestaurant",
};

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Croquetas de Jamón Ibérico",
    description: "Croquetas caseras crujientes rellenas de jamón ibérico de bellota",
    price: 12.50,
    category: "entradas",
    image: "https://images.unsplash.com/photo-1582269255471-e582cdae6825?w=400&h=400&fit=crop",
    tags: ["gluten-free-available"],
  },
  {
    id: 2,
    name: "Tabla de Quesos y Embutidos",
    description: "Selección de quesos españoles e ibéricos acompañados de embutidos",
    price: 18.00,
    category: "entradas",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
    tags: ["vegetarian"],
  },
  {
    id: 3,
    name: "Tábula con Tomate y Feta",
    description: "Ensalada fresca de tomate, pepino y queso feta con limón",
    price: 11.00,
    category: "entradas",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
    tags: ["vegetarian", "gluten-free"],
  },
  {
    id: 4,
    name: "Sepia a la Plancha",
    description: "Sepia fresca a la plancha con limón y ajo, acompañada de verduras",
    price: 24.50,
    category: "principales",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
    tags: ["gluten-free"],
  },
  {
    id: 5,
    name: "Dorada al Horno",
    description: "Dorada entera al horno con hierbas aromáticas y aceite de oliva",
    price: 22.00,
    category: "principales",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    tags: ["gluten-free"],
  },
  {
    id: 6,
    name: "Rabo de Toro Estofado",
    description: "Rabo de toro estofado lentamente con vino tinto y verduras",
    price: 26.00,
    category: "principales",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561e1f?w=400&h=400&fit=crop",
    tags: ["gluten-free"],
  },
  {
    id: 7,
    name: "Pasta a la Boloñesa Casera",
    description: "Pasta fresca hecha a mano con salsa boloñesa tradicional",
    price: 16.50,
    category: "principales",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
    tags: ["vegetarian-available"],
  },
  {
    id: 8,
    name: "Pollo al Ajillo",
    description: "Pollo tierno sazonado con ajo, vino blanco y especias mediterráneas",
    price: 19.50,
    category: "principales",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
    tags: ["gluten-free"],
  },
  {
    id: 9,
    name: "Panna Cotta de Vainilla",
    description: "Postre cremoso con coulis de frutas rojas y galleta crujiente",
    price: 8.50,
    category: "postres",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291840?w=400&h=400&fit=crop",
    tags: ["vegetarian"],
  },
  {
    id: 10,
    name: "Tiramisú Tradicional",
    description: "Clásico italiano con mascarpone, café espresso y cacao",
    price: 8.00,
    category: "postres",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=400&fit=crop",
    tags: ["vegetarian"],
  },
  {
    id: 11,
    name: "Crema Catalana",
    description: "Postre tradicional catalán con crema suave y azúcar caramelizado",
    price: 7.50,
    category: "postres",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    tags: ["vegetarian"],
  },
  {
    id: 12,
    name: "Vino de la Casa (Tinto)",
    description: "Vino tinto crianza de la región, suave y aromático",
    price: 5.50,
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=400&h=400&fit=crop",
    tags: ["vegetarian"],
  },
];

export const FEATURED_DISHES = MENU_ITEMS.slice(0, 6);

export const TESTIMONIALS = [
  {
    id: 1,
    name: "María García",
    text: "Una experiencia culinaria excepcional. La comida estaba deliciosa y el servicio impecable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Juan López",
    text: "El mejor restaurante donde he comido. Los ingredientes frescos se notan en cada plato.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Carmen Rodríguez",
    text: "Ambiente acogedor, comida exquisita y precios justos. ¡Definitivamente volveré!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Chef Marco Rossi",
    role: "Chef Ejecutivo",
    bio: "Con 25 años de experiencia en cocina mediterránea, Marco ha creado el alma culinaria de La Buena Mesa",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Ana Martínez",
    role: "Propietaria",
    bio: "Apasionada por la gastronomía y comprometida con ofrecer la mejor experiencia a nuestros clientes",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Diego Fernández",
    role: "Chef Pastelero",
    bio: "Especializado en postres mediterráneos, Diego crea dulces que son una verdadera obra de arte",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];
