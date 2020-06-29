import React, { useContext } from "react";
import { Context } from "../Context";

function CartItem({ item }) {
  const { removeCartItem } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        onClick={() => removeCartItem(item.id)}
        className="ri-delete-bin-line"
      ></i>
      <img src={item.url} width="130px" alt={"cart item"} />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
