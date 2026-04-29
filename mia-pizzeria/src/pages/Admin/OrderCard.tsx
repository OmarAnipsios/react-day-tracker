import type { OrderItem, OrderStatus } from "../../context/Admin/AdminContext";

type OrderCardProps = {
  order: OrderItem;
  onUpdateStatus: (orderId: string, status: OrderStatus) => void;
  onDelete: (orderId: string) => void;
};

export function OrderCard({ order, onUpdateStatus, onDelete }: OrderCardProps) {
  const statusColors: Record<OrderStatus, string> = {
    nuovo: "bg-blue-100 text-blue-800",
    "in preparazione": "bg-yellow-100 text-yellow-800",
    pronto: "bg-green-100 text-green-800",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg">{order.name}</h3>
          <p className="text-sm text-gray-600">
            {order.ingredients.join(", ")}
          </p>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg">€{order.price.toFixed(2)}</p>
          {order.quantity && order.quantity > 1 && (
            <p className="text-sm text-gray-600">x{order.quantity}</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          {(["nuovo", "in preparazione", "pronto"] as OrderStatus[]).map(
            (status) => (
              <button
                key={status}
                onClick={() => onUpdateStatus(order.orderId, status)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  order.status === status
                    ? statusColors[status]
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {status}
              </button>
            ),
          )}
        </div>

        <button
          onClick={() => onDelete(order.orderId)}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
        >
          Elimina
        </button>
      </div>
    </div>
  );
}