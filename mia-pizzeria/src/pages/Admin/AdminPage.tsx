import { useContext } from "react";
import {
  AdminStateContext,
  AdminDispatchContext,
  type OrderStatus,
} from "../../context/Admin/AdminContext";
import { OrderCard } from "./OrderCard";

export function AdminPage() {
  const state = useContext(AdminStateContext);
  const dispatch = useContext(AdminDispatchContext);

  if (!state || !dispatch) {
    return <div>AdminProvider non configurato</div>;
  }

  const ordersByUser = state.orders.reduce(
    (acc, order) => {
      if (!acc[order.userEmail]) {
        acc[order.userEmail] = [];
      }
      acc[order.userEmail].push(order);
      return acc;
    },
    {} as Record<string, typeof state.orders>,
  );

  const handleUpdateStatus = (orderId: string, status: OrderStatus) => {
    dispatch({ type: "UPDATE_STATUS", orderId, status });
  };

  const handleDelete = (orderId: string) => {
    dispatch({ type: "DELETE_ORDER", orderId });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Pannello Ordini
      </h1>

      {Object.keys(ordersByUser).length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500 text-lg">Nessun ordine presente</p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(ordersByUser).map(([email, orders]) => (
            <div key={email} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
                {email}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {orders.map((order) => (
                  <OrderCard
                    key={order.orderId}
                    order={order}
                    onUpdateStatus={handleUpdateStatus}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
