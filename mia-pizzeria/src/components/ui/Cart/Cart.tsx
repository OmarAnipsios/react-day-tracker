import { useCartDispatch, useCartState } from "../../../hooks/useCart";

export default function Cart() {
  const { cartItems, isOpenCart } = useCartState();
  const dispatch = useCartDispatch();

  const toggleCart = () => {
    dispatch({ type: "IS_OPEN_CART", isOpenCart: !isOpenCart });
  };

  return (
    <div>
      <button
        className="flex items-center hover:bg-olive-200 text-gray-800 font-semibold py-2 px-4 rounded cursor-pointer"
        onClick={toggleCart}
      >
        <img
          src="https://www.svgrepo.com/show/521847/shopping-cart.svg"
          alt="Shopping Cart"
          className="w-6 h-6 ml-auto"
        />
        <span className="ml-2 bg-olive-300 text-olive-500 rounded-full px-2 py-1 text-xs">
          {cartItems.reduce((total, item) => total + (item.quantity || 0), 0)}
        </span>
      </button>
    </div>
  );
}
