import { useCartState } from "../../../hooks/useCart";
import type { Pizza } from "../../../types/Pizza";
import { AddProductButton } from "../AddProductButton/AddProduct";
import { RemoveProductButton } from "../RemoveProductButton/RemoveProductButton";
export default function Quantity({ pizza }: { pizza: Pizza }) {
  const { cartItems } = useCartState();

  return (
    <div className="m-4 flex items-center justify-end">
      <RemoveProductButton pizza={pizza} />
      <span className="mx-4">
        {cartItems.find((item) => item.id === pizza.id)?.quantity || 0}
      </span>
      <AddProductButton pizza={pizza} />
    </div>
  );
}
