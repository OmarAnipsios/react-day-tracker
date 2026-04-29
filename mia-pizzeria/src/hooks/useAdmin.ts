import { useContext } from "react";
import {
  AdminStateContext,
  AdminDispatchContext,
  type OrderItem,
} from "../context/Admin/AdminContext";

export function useAdmin() {
  const state = useContext(AdminStateContext);
  const dispatch = useContext(AdminDispatchContext);

  if (state === undefined || dispatch === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }

  const addOrder = (order: OrderItem) => {
    dispatch({ type: "ADD_ORDER", order });
  };

  const updateStatus = (orderId: string, status: "nuovo" | "in preparazione" | "pronto") => {
    dispatch({ type: "UPDATE_STATUS", orderId, status });
  };

  const deleteOrder = (orderId: string) => {
    dispatch({ type: "DELETE_ORDER", orderId });
  };

  return {
    orders: state.orders,
    addOrder,
    updateStatus,
    deleteOrder,
  };
}