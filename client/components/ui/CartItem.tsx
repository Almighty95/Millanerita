import { CartItem } from "@/hooks/use-cart";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItemComponent({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  const handleQuantityChange = (delta: number) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity > 0) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const subtotal = item.price * item.quantity;

  return (
    <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors border border-border/50">
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-foreground leading-tight">
          {item.name}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          ${item.price.toLocaleString()} c/u
        </p>
      </div>

      <div className="flex items-center gap-3 ml-4">
        {/* Quantity Controls */}
        <div className="flex items-center border border-border rounded-lg bg-background">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Disminuir cantidad"
          >
            <Minus size={14} />
          </button>
          <span className="px-3 py-1 text-sm font-semibold text-foreground min-w-8 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Aumentar cantidad"
          >
            <Plus size={14} />
          </button>
        </div>

        {/* Subtotal */}
        <div className="text-right min-w-fit">
          <p className="font-bold text-sm text-foreground">
            ${subtotal.toLocaleString()}
          </p>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => onRemove(item.id)}
          className="p-1.5 text-destructive hover:bg-destructive/10 rounded transition-colors ml-1"
          aria-label="Eliminar del carrito"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
