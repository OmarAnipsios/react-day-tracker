import { createContext } from "react";
import type { Pizza } from "../../types/Pizza";

type CartState = {
  cartItems: Pizza[];
};

export const CartStateContext = createContext<CartState | undefined>(undefined);

export type CartAction =
  | { type: "ADD_PIZZA"; pizza: Pizza }
  | { type: "REMOVE_PIZZA"; pizza: Pizza }
  | { type: "CLEAR_ITEMS_CART"; pizza: Pizza }
  | { type: "CLEAR_CART" };

export const CartDispatchContext = createContext<
  React.Dispatch<CartAction> | undefined
>(undefined);
