// src/App.jsx

import { useState } from "react";
import "./App.css";
import plants from "./data";
import PlantList from "./components/plants/PlantList";
import Cart from "./components/cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(plant) {
    const existing = cart.find((item) => item.id === plant.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }

  function handleUpdateQty(id, change) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  return (
    <div className="app">
      <h1>Proper Plants</h1>
      <div className="layout">
        <PlantList plants={plants} onAddToCart={handleAddToCart} />
        <Cart cart={cart} onUpdateQty={handleUpdateQty} />
      </div>
    </div>
  );
}

export default App;
