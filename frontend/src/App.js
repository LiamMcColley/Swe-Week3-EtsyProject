import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import CartArrayProvider from "./contexts/cartContext";
import PageProvider from "./contexts/pageContext";

import Cart from "./components/cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import StripeContainer from "./components/StripeContainer"

export default function App() {
  return (
    <>
      <CartArrayProvider>
        <PageProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/item" element={<Item />} />
                <Route path="/payment" element={<StripeContainer />} />
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
        </PageProvider>
      </CartArrayProvider>
    </>
  );
}
