import { useContext } from "react";
import CartContext from "./CartContext";

function ProductItem({ id, name, price }) {
  const { addToCart } = useContext(CartContext);

  function addProduct() {
    addToCart({
      id: id,
      name: name,
      price: price
    });
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>

      <button onClick={addProduct}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;