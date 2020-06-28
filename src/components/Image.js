import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { Context } from "../Context";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);
  const heartIcon = (hovered || img.isFavorite) && (
    <i
      onClick={() => toggleFavorite(img.id)}
      className={`ri-heart-${img.isFavorite ? "fill" : "line"} favorite`}
    ></i>
  );
  const plusIcon = hovered && <i className="ri-add-circle-line cart"></i>;
  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img.url} className="image-grid" alt="img-prop" />
      {heartIcon}
      {plusIcon}
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
