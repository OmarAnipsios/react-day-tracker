interface OrderSummaryProps {
  subtotal: number;
  deliveryCost: number;
  discount: number;
  total: number;
  onCheckout: () => void;
  onContinueShopping: () => void;
}

export function OrderSummary({
  subtotal,
  deliveryCost,
  discount,
  total,
  onCheckout,
  onContinueShopping,
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
      <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">
        Riepilogo Ordine
      </h2>

      <div className="space-y-4">
        <SummaryRow label="Subtotale" value={`€${subtotal.toFixed(2)}`} />
        <SummaryRow
          label="Costo Consegna"
          value={`€${deliveryCost.toFixed(2)}`}
        />
        <SummaryRow
          label="Sconto"
          value={discount > 0 ? `€${discount.toFixed(2)}` : "€0.00"}
          valueClassName={discount > 0 ? "text-green-600" : undefined}
        />

        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">
              TOTALE ORDINE
            </span>
            <span className="text-lg font-bold text-gray-900">
              €{total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <button
          onClick={onCheckout}
          className="w-full py-4 px-6 bg-white border-2 rounded-lg font-semibold text-center transition-all duration-200 hover:bg-gray-50 hover:shadow-md hover:cursor-pointer active:scale-[0.98]"
          style={{ borderColor: "#2D5A27", color: "#2D5A27" }}
        >
          Procedi al Checkout
        </button>

        <button
          onClick={onContinueShopping}
          className="w-full py-3 px-6 border-2 border-gray-800 text-gray-800 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-200 hover:cursor-pointer active:scale-[0.98]"
        >
          Continua Acquisti
        </button>
      </div>
    </div>
  );
}

interface SummaryRowProps {
  label: string;
  value: string;
  valueClassName?: string;
}

function SummaryRow({ label, value, valueClassName }: SummaryRowProps) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">{label}</span>
      <span className={`font-medium text-gray-900 ${valueClassName || ""}`}>
        {value}
      </span>
    </div>
  );
}
