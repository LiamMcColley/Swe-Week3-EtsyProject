import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import AccessTokenProvider from "./contexts/accessTokenContext";
import CartContext from "./contexts/cartContext";

import Cart from "./components/cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <AccessTokenProvider>
        <div className="App">
          <h1>Boiler Plate</h1>

          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/cart" element={<Cart />} />

              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem 0" }}>
                    <h2>404 not found</h2>
                    <p>
                      <Link to="/">
                        This link can take you back home though
                      </Link>
                    </p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </div>
      </AccessTokenProvider>
    </>
  );
}
