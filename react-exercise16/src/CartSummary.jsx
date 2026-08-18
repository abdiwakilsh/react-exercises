import { useContext } from "react";
import CartContext from "./CartContext";

function CartSummary() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  let total = 0;

  cartItems.forEach((item) => {
    total = total + item.price;
  });

  return (
    <div>
      <h2>Shopping Cart</h2>

      <p>Total Items: {cartItems.length}</p>

      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ${item.price}
          </p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total Price: ${total}</h3>
    </div>
  );
}

export default CartSummary;