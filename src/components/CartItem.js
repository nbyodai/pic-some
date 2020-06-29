import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";

function CartItem({ item }) {
  const { removeCartItem } = useContext(Context);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="cart-item">
      <i
        onClick={() => removeCartItem(item.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
      ></i>
      <img src={item.url} width="130px" alt={"cart item"} />
      <p>$5.99</p>
    </div>
  );
}
CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
