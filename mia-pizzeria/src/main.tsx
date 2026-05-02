import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AdminProvider } from "./context/Admin/AdminProvider.tsx";
import { CartProvider } from "./context/Cart/CartProvider.tsx";
import { UserProvider } from "./context/User/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <AdminProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AdminProvider>
    </UserProvider>
  </StrictMode>,
);
