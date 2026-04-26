export default function Header() {
  return (
    <header className="header bg-white shadow-md flex sticky top-0 p-4 w-full items-center z-10">
      <span className="ml-0 mr-auto">🍕</span>
      <button className="flex items-center hover:bg-olive-200 text-gray-800 font-semibold py-2 px-4 rounded cursor-pointer">
        <img
          src="https://www.svgrepo.com/show/521847/shopping-cart.svg"
          alt="Shopping Cart"
          className="w-6 h-6 ml-auto"
        />
      </button>
    </header>
  );
}
