import { useReducer } from "react";
import {
  CartStateContext,
  CartDispatchContext,
  type CartAction,
} from "./CartContext";
import type { Pizza } from "../../types/Pizza";

type CartState = {
  cartItems: Pizza[];
};

const initialState: CartState = {
  cartItems: [],
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_PIZZA": {
      const pizza = state.cartItems.find((item) => item.id === action.pizza.id);
      return {
        ...state,
        cartItems: pizza
          ? state.cartItems.map((item) =>
              item.id === action.pizza.id
                ? { ...item, quantity: (item.quantity ?? 0) + 1 }
                : item,
            )
          : [...state.cartItems, { ...action.pizza, quantity: 1 }],
      };
    }

    case "REMOVE_PIZZA": {
      const pizza = state.cartItems.find((item) => item.id === action.pizza.id);
      if (!pizza) return state;
      return {
        ...state,
        cartItems:
          (pizza.quantity ?? 0) > 1
            ? state.cartItems.map((item) =>
                item.id === action.pizza.id
                  ? { ...item, quantity: (item.quantity ?? 0) - 1 }
                  : item,
              )
            : state.cartItems.filter((item) => item.id !== action.pizza.id),
      };
    }

    case "CLEAR_ITEMS_CART": {
      const pizza = state.cartItems.find((item) => item.id === action.pizza.id);
      if (!pizza) return state;
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.pizza.id,
        ),
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        cartItems: [],
      };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}
