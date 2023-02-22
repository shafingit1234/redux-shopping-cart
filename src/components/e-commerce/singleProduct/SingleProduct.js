import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/slices/cartSlice";
import "./SingleProduct.css";
const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  // take out cart by using useSelector.
  const cart = useSelector((state) => state.cartReducer.cart);
  const curr_item = cart.find((item) => item.id === product.id);
  const curr_quantity = curr_item ? curr_item.quantity : 0;
  return (
    <div className="singleProduct">
      <img className="productImg" src={product.images[0]} alt={product.title} />
      <div className="productInfo">
        <h2 className="productTitle">{product.title}</h2>
        <p className="productPrice">{product.price}</p>
        <p>Category: {product.category.name}</p>
      </div>
      <div className="cart-info">
        {/* as soon as you will click on the + or - button dispatch an action, it can be addToCart or removeFromCart */}
        <button
          className="button"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          -
        </button>
        <h4>{curr_quantity}</h4>
        <button
          className="button"
          onClick={() => dispatch(addToCart(product.id))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
