import React from "react";
import selectedProduct from "./shop_data";
import SelectedCart from "./selectedCart";
import "./shoppingcart.css";

function createShopCart(kart) {
  return (
    <SelectedCart
      key={kart.id}
      id={kart.id}
      name={kart.name}
      price={kart.price}
      image={kart.image}
    />
  );
}
export default function shoppingcart(props) {
  return (
    <div className="shopcart">
      <div>
        <h1>Shopping Cart {}</h1>
        <div className="selected">{selectedProduct.map(createShopCart)}</div>
        <div className="cupon">
          <div className="cupon1">
            {" "}
            <h4>Coupon code:</h4>
            <input type="text" placeholder="Enter cupon code*"></input>
            <button>Apply</button>
          </div>
          <div className="btn">
            <button type="button"> Update Cart</button>
          </div>
        </div>
      </div>

      <div className="total">
        <div>total</div>
        <button>Proceed to Checkout</button>
        <a href="/">Continue Shopping</a>
      </div>
    </div>
  );
}
