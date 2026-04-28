import { useCartDispatch } from "../../../hooks/useCart";
import type { Pizza } from "../../../types/Pizza";

export function RemoveProductButton({ pizza }: { pizza: Pizza }) {
  const dispatch = useCartDispatch();

  const RemoveCart = (pizza: Pizza) => {
    dispatch({ type: "REMOVE_PIZZA", pizza });
  };

  return (
    <button
      className="p-2 bg-olive-300 rounded-tl rounded-bl hover:cursor-pointer transition-all duration-200 hover:bg-olive-400 active:scale-[0.95]"
      onClick={() => RemoveCart(pizza)}
      disabled={!pizza.available}
    >
      -
    </button>
  );
}
