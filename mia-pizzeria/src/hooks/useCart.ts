import { useContext } from "react";
import {
  CartStateContext,
  CartDispatchContext,
} from "../context/Cart/CartContext";

export function useCartState() {
  const context = useContext(CartStateContext);
  if (!context)
    throw new Error("useCartState deve essere usato dentro CartProvider");
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (!context)
    throw new Error("useCartDispatch deve essere usato dentro CartProvider");
  return context;
}
