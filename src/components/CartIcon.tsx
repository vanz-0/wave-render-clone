import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartIconProps {
  onClick: () => void;
}

export const CartIcon: React.FC<CartIconProps> = ({ onClick }) => {
  const { totalItems } = useCart();

  return (
    <button
      onClick={onClick}
      className="relative p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
      aria-label="Shopping cart"
    >
      <ShoppingCart className="h-6 w-6 text-foreground" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {totalItems}
        </span>
      )}
    </button>
  );
};
