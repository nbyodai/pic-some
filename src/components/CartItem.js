import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const [hovered, ref] = useHover();
  const { removeCartItem } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        onClick={() => removeCartItem(item.id)}
        ref={ref}
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
