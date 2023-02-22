import React from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  let count = 0;
  cart.forEach((element) => {
    count = count + element.quantity;
  });

  return (
    <nav>
      <h2 className="banner">My Mantra</h2>
      <div className="right-layout">
        <div className="cart-layout">
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
          <h3>{count}</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
