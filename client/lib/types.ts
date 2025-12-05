export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: "entradas" | "principales" | "postres" | "bebidas";
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}
