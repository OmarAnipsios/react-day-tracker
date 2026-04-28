import { useCartDispatch } from "../../../hooks/useCart";
import type { Pizza } from "../../../types/Pizza";

export function AddProductButton({ pizza }: { pizza: Pizza }) {
  const dispatch = useCartDispatch();

  const AddCart = (pizza: Pizza) => {
    dispatch({ type: "ADD_PIZZA", pizza });
  };

  return (
    <button
      className="p-2 bg-olive-300 rounded-tr rounded-br hover:cursor-pointer transition-all duration-200 hover:bg-olive-400 active:scale-[0.95]"
      onClick={() => AddCart(pizza)}
      disabled={!pizza.available}
    >
      +
    </button>
  );
}
