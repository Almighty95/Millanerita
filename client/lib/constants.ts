export const RESTAURANT_NAME = "Mi Llanerita";
export const RESTAURANT_TAGLINE = "Carne a la Llanera Auténtica";
export const RESTAURANT_PHONE = "+57 313 8850640";
export const RESTAURANT_WHATSAPP = "+573138850640";
export const RESTAURANT_EMAIL = "info@millanerita.com";
export const RESTAURANT_ADDRESS = "Los Llanos, Colombia";

export const BUSINESS_HOURS = [
  { day: "Lunes - Domingo", hours: "11:00 - 22:00" },
  { day: "Festivos", hours: "11:00 - 23:00" },
];

export const SOCIAL_MEDIA = {
  instagram: "https://instagram.com/labuenamesarestaurant",
  facebook: "https://facebook.com/labuenamesarestaurant",
  twitter: "https://twitter.com/labuenamesarestaurant",
};

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Carne a la Llanera",
    description: "Corte especial de res a la brasa con chimichurri casero y arepas",
    price: 35000,
    category: "principales",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561e1f?w=400&h=400&fit=crop",
    tags: ["gluten-free"],
  },
  {
    id: 2,
    name: "Carne Asada a la Parrilla",
    description: "Carne premium a la parrilla, jugosa y con sabor de humo llanero",
    price: 38000,
    category: "principales",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
    tags: ["gluten-free"],
  },
  {
    id: 3,
    name: "Chivo Guisado",
    description: "Chivo tierno guisado con verduras autóctonas y especias llaneras",
    price: 32000,
    category: "principales",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
    tags: ["gluten-free"],
  },
  {
    id: 4,
    name: "Costillas BBQ Llaneras",
    description: "Costillas marinadas y asadas a fuego lento con salsa BBQ casera",
    price: 34000,
    category: "principales",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
    tags: ["gluten-free"],
  },
  {
    id: 5,
    name: "Lomo Saltado Llanero",
    description: "Lomo de res en trozos salteado con cebolla, tomate y cilantro fresco",
    price: 36000,
    category: "principales",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
    tags: ["gluten-free"],
  },
  {
    id: 6,
    name: "Falda Asada",
    description: "Falda de res perfectamente asada con sal de mar y ajo",
    price: 30000,
    category: "principales",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
    tags: ["gluten-free"],
  },
  {
    id: 7,
    name: "Arepas con Queso",
    description: "Arepas caseras rellenas de queso de mano fresco y mantequilla",
    price: 12000,
    category: "acompañamientos",
    image: "https://images.unsplash.com/photo-1582269255471-e582cdae6825?w=400&h=400&fit=crop",
    tags: ["vegetarian"],
  },
  {
    id: 8,
    name: "Arepas de Carne Mechada",
    description: "Arepas rellenas de carne mechada jugosa y queso de mano",
    price: 15000,
    category: "acompañamientos",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
    tags: [],
  },
  {
    id: 9,
    name: "Yuca Frita",
    description: "Yuca crujiente dorada, acompañada de salsa picante casera",
    price: 10000,
    category: "acompañamientos",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291840?w=400&h=400&fit=crop",
    tags: ["vegetarian", "gluten-free"],
  },
  {
    id: 10,
    name: "Ensalada Llanera",
    description: "Ensalada fresca con aguacate, tomate, cebolla y cilantro",
    price: 11000,
    category: "acompañamientos",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=400&fit=crop",
    tags: ["vegetarian", "gluten-free"],
  },
  {
    id: 11,
    name: "Flan Casero",
    description: "Flan tradicional con caramelo suave y sabor de vainilla",
    price: 9000,
    category: "postres",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    tags: ["vegetarian"],
  },
  {
    id: 12,
    name: "Chicha de Maíz",
    description: "Bebida refrescante de maíz con canela y clavo",
    price: 5000,
    category: "bebidas",
    image: "https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=400&h=400&fit=crop",
    tags: ["vegetarian", "gluten-free"],
  },
];

export const FEATURED_DISHES = MENU_ITEMS.slice(0, 6);

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Carlos Pérez",
    text: "La mejor carne a la llanera que he probado. Autenticidad en cada bocado. ¡Excelente!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Patricia Ruiz",
    text: "Mi Llanerita es una joya. La carne es fresca, las arepas deliciosas y el servicio de primera.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Roberto López",
    text: "Definitivamente el mejor lugar para comer carne llanera. Vuelvo cada semana sin falta.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Juan Usuga",
    role: "Chef de Carne",
    bio: "Maestro en el arte de asar carne a la llanera. Con 20 años de experiencia en la gastronomía llanera.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "María Usuga",
    role: "Propietaria",
    bio: "Apasionada por las tradiciones llaneras y comprometida con ofrecer la mejor experiencia culinaria",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Luis González",
    role: "Parrillero",
    bio: "Especialista en parrilla llanera, perfecciona cada corte de carne con técnicas tradicionales",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];
