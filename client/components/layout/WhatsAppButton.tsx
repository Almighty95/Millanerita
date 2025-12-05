import { MessageCircle } from "lucide-react";
import { RESTAURANT_WHATSAPP } from "@/lib/constants";

export default function WhatsAppButton() {
  const whatsappMessage = encodeURIComponent(
    "Hola! Me gustaría conocer más sobre La Buena Mesa."
  );
  const whatsappLink = `https://wa.me/${RESTAURANT_WHATSAPP.replace(/\D/g, "")}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
      title="Enviar mensaje por WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
