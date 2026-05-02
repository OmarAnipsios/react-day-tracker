import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { useUser } from "./context/User/UserContext";
import { AdminPage } from "./pages/Admin/AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import CartPage from "./pages/Cart/CartPage";

function App() {
  const { user } = useUser();
  return (
    <BrowserRouter>
      <div className="bg-olive-100 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
