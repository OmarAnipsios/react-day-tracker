import { useCartState, useCartDispatch } from "../../hooks/useCart";
import { CartItem } from "./CartItem";
import { OrderSummary } from "../../components/ui/OrderSummary/OrderSummary";
import { EmptyCart } from "./EmptyCart";
import type { Pizza } from "../../types/Pizza";
import { useAdmin } from "../../hooks/useAdmin";
import { useUser } from "../../context/User/UserContext";

export default function CartPage() {
  const state = useCartState();
  const dispatch = useCartDispatch();
  const cartItems = state.cartItems;
  const { addOrder } = useAdmin();
  const { user } = useUser();

  const totalItems = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0,
  );
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 0),
    0,
  );
  const deliveryCost = 2.5;
  const discount = 0;
  const total = subtotal + deliveryCost - discount;

  const removePizza = (pizza: Pizza) => {
    dispatch({ type: "CLEAR_ITEMS_CART", pizza });
  };

  const handleCheckout = () => {
    if (!user) {
      alert("Devi effettuare il login per completare l'ordine");
      return;
    }

    cartItems.forEach((item) => {
      const orderId = `${Date.now()}-${item.id}-${Math.random().toString(36).substr(2, 9)}`;
      addOrder({
        ...item,
        orderId,
        userEmail: user.email,
        status: "nuovo",
      });
    });

    dispatch({ type: "CLEAR_CART" });

    alert("Ordine inviato con successo!");
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div
      className="min-h-screen py-8 px-4"
      style={{ backgroundColor: "#F9F7F2" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-center text-4xl font-bold mb-6 mt-0">
          Il Tuo Carrello ({totalItems}{" "}
          {totalItems === 1 ? "articolo" : "articoli"})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Colonna Sinistra - Lista Prodotti */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {cartItems.map((item, index) => (
                <CartItem
                  key={item.id}
                  item={item}
                  isLast={index === cartItems.length - 1}
                  onRemove={() => removePizza(item)}
                />
              ))}
            </div>
          </div>

          {/* Colonna Destra - Sidebar Riepilogo */}
          <div className="lg:col-span-3">
            <OrderSummary
              subtotal={subtotal}
              deliveryCost={deliveryCost}
              discount={discount}
              total={total}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
