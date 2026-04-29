import { createContext } from "react";
import type { Pizza } from "../../types/Pizza";

export type OrderStatus = "nuovo" | "in preparazione" | "pronto";

export type OrderItem = Pizza & {
  orderId: string;
  userEmail: string;
  status: OrderStatus;
};

export type AdminState = {
  orders: OrderItem[];
};

export const AdminStateContext = createContext<AdminState | undefined>(undefined);

export type AdminAction =
  | { type: "ADD_ORDER"; order: OrderItem }
  | { type: "UPDATE_STATUS"; orderId: string; status: OrderStatus }
  | { type: "DELETE_ORDER"; orderId: string };

export const AdminDispatchContext = createContext<
  React.Dispatch<AdminAction> | undefined
>(undefined);