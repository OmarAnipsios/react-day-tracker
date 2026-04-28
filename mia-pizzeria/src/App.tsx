import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { CartProvider } from "./context/CartProvider";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <CartProvider>
      <div className="bg-olive-100 min-h-screen">
        <Header />
        <Home />
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
