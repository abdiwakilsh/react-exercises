import { useState } from "react";
import CartContext from "./CartContext";
import ProductItem from "./ProductItem";
import CartSummary from "./CartSummary";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function removeFromCart(id) {
    const newCart = cartItems.filter((item) => item.id !== id);

    setCartItems(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart
      }}
    >
      <h1>My Shop</h1>

      <ProductItem
        id={1}
        name="Laptop"
        price={500}
      />

      <ProductItem
        id={2}
        name="Phone"
        price={300}
      />

      <ProductItem
        id={3}
        name="Headphones"
        price={50}
      />

      <CartSummary />
    </CartContext.Provider>
  );
}

export default App;