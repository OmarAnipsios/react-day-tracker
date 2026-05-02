import Quantity from "../../components/ui/Quantity/Quantity";
import type { Pizza } from "../../types/Pizza";

interface CartItemProps {
  item: Pizza;
  isLast: boolean;
  onRemove: () => void;
}

export function CartItem({ item, isLast, onRemove }: CartItemProps) {
  return (
    <div>
      <div className="flex items-center gap-4 py-4 group">
        {/* Immagine */}
        <div className="flex-shrink-0">
          <div className="relative overflow-hidden rounded-xl shadow-sm">
            <img
              src={item.src || "https://via.placeholder.com/80"}
              alt={item.name}
              className="w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Dettagli */}
        <div className="flex-grow min-w-0">
          <h3 className="font-serif font-semibold text-gray-900 text-lg truncate">
            Pizza {item.name}
          </h3>
          <p className="text-gray-700 font-medium mt-1">
            €{item.price.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {item.ingredients?.join(", ")}
          </p>
        </div>

        {/* Controlli Quantità */}
        <Quantity pizza={item} />

        {/* Bottone Rimuovi */}
        <button
          onClick={onRemove}
          className="flex-shrink-0 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 hover:scale-110 hover:cursor-pointer"
          aria-label="Rimuovi dal carrello"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>

      {/* Divider */}
      {!isLast && <div className="border-b border-gray-100" />}
    </div>
  );
}
