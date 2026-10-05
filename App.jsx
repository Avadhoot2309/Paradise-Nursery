import React from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const count = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <h2>Paradise Nursery</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart 🛒 ({count})</Link>
      </div>
    </nav>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Bring nature into your home</p>
        <button className="get-started" onClick={() => navigate("/plants")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/plants"
            element={
              <>
                <Navbar />
                <ProductList />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <CartItem />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutUs />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
