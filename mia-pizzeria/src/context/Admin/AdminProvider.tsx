import { useReducer } from "react";
import {
  AdminStateContext,
  AdminDispatchContext,
  type AdminAction,
  type AdminState,
  type OrderItem,
} from "./AdminContext";

const initialState: AdminState = {
  orders: [],
};

function adminReducer(state: AdminState, action: AdminAction): AdminState {
  switch (action.type) {
    case "ADD_ORDER": {
      return {
        ...state,
        orders: [...state.orders, action.order],
      };
    }

    case "UPDATE_STATUS": {
      return {
        ...state,
        orders: state.orders.map((order: OrderItem) =>
          order.orderId === action.orderId
            ? { ...order, status: action.status }
            : order,
        ),
      };
    }

    case "DELETE_ORDER": {
      return {
        ...state,
        orders: state.orders.filter((order: OrderItem) => order.orderId !== action.orderId),
      };
    }

    default:
      return state;
  }
}

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(adminReducer, initialState);

  return (
    <AdminStateContext.Provider value={state}>
      <AdminDispatchContext.Provider value={dispatch}>
        {children}
      </AdminDispatchContext.Provider>
    </AdminStateContext.Provider>
  );
}