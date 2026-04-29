import Cart from "../../ui/Cart/Cart";
import { useUser } from "../../../context/User/UserContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { isAdmin } = useUser();

  return (
    <header className="header bg-white shadow-md flex sticky top-0 p-4 w-full items-center z-10">
      <span className="ml-0 mr-auto">🍕</span>
      {isAdmin && (
        <Link
          to="/admin"
          className="mr-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Admin
        </Link>
      )}
      <Cart />
    </header>
  );
}
