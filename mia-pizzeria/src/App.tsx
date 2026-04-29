import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { CartProvider } from "./context/Cart/CartProvider";
import { Home } from "./pages/Home/Home";
import { UserProvider } from "./context/User/UserContext";
import { AdminProvider } from "./context/Admin/AdminProvider";
import { AdminPage } from "./pages/Admin/AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <AdminProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="bg-olive-100 min-h-screen">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<AdminPage />} />
              </Routes>
              <div className="mt-16">
                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </CartProvider>
      </AdminProvider>
    </UserProvider>
  );
}

export default App;
