import { useState } from "react";

function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addProduct() {
    if (name === "" || price === "") {
      return;
    }

    const product = {
      id: Date.now(),
      name: name,
      price: Number(price),
      quantity: 1,
    };

    setProducts([...products, product]);

    setName("");
    setPrice("");
  }

  function increase(id) {
    const newProducts = products.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setProducts(newProducts);
  }

  function decrease(id) {
    const newProducts = products.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setProducts(newProducts);
  }

  function remove(id) {
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
  }

  const total = products.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add to Cart</button>

      <hr />

      {products.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
          <button onClick={() => remove(item.id)}>Remove</button>

          <hr />
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default ShoppingCart;