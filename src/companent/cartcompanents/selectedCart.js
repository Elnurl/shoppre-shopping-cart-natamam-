import React from "react";
import "./selectedCart.css";
function selectedCart(props) {
  return (
    <div>
      <div className="cart_element">
        <div className="img">
          <img src={props.image} alt=".png" />
        </div>
        <div>
          {" "}
          <h4>{props.name}</h4>
          <h2>{props.price}</h2>
        </div>
      </div>
    </div>
  );
}

export default selectedCart;
