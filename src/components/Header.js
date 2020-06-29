import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);
  const cartIconFill = cartItems.length ? "fill" : "line";

  return (
    <header>
      <h2>
        <Link to="/">Pic Some</Link>
      </h2>
      <Link to="/cart">
        <i className={`ri-shopping-cart-${cartIconFill} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
