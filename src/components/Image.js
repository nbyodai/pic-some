import React, { useState } from "react";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);

  const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
  const plusIcon = hovered && <i className="ri-add-circle-line cart"></i>;
  return (
    <div className={`${className} image-container`}>
      <img
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        src={img.url}
        className="image-grid"
        alt="img-prop"
      />
      {heartIcon}
      {plusIcon}
    </div>
  );
}

export default Image;
