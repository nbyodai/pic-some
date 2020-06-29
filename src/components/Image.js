import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../Context";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const [hovered, ref] = useHover();
  const { toggleFavorite, addCartItem, cartItems, removeCartItem } = useContext(
    Context
  );

  const heartIcon = (hovered || img.isFavorite) && (
    <i
      onClick={() => toggleFavorite(img.id)}
      className={`ri-heart-${img.isFavorite ? "fill" : "line"} favorite`}
    ></i>
  );

  function plusIcon() {
    const isAlreadyInCart = cartItems.some((item) => item.id === img.id);
    if (isAlreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeCartItem(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => addCartItem(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} className="image-grid" alt="img-prop" />
      {heartIcon}
      {plusIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }).isRequired,
};

export default Image;
