import Cart from "../../ui/Cart/Cart";

export default function Header() {
  return (
    <header className="header bg-white shadow-md flex sticky top-0 p-4 w-full items-center z-10">
      <span className="ml-0 mr-auto">🍕</span>
      <Cart />
    </header>
  );
}
