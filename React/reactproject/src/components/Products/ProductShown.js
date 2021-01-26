import React from "react";
import "./products.css";
import { useStateValue } from "./StateProvider";

function ProductShown({ id, title, image, price, }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Wishlist</button>
      <button>Details</button>
    </div>
  );
}

export default ProductShown;