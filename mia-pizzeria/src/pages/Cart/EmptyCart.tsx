interface EmptyCartProps {
  onContinueShopping: () => void;
}

export function EmptyCart({ onContinueShopping }: EmptyCartProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" style={{ backgroundColor: "#F9F7F2" }}>
      <div className="text-center px-4">
        <div className="mb-6">
          <svg
            className="w-24 h-24 mx-auto text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <p className="text-2xl font-serif text-gray-800 mb-2">Il tuo carrello è vuoto</p>
        <p className="text-gray-600 mb-6">Aggiungi alcune pizze deliziose per iniziare!</p>
        <button
          onClick={onContinueShopping}
          className="px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200 font-medium active:scale-[0.98]"
        >
          Continua Acquisti
        </button>
      </div>
    </div>
  );
}