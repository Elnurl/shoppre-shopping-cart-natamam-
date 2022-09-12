import React from "react";
import Cart from "./Cart";
import data from "../Data";
function createCart(da) {
  return (
    <Cart
      key={da.id}
      id={da.id}
      name={da.name}
      price={da.price}
      image={da.image}
    />
  );
}
export default function main(props) {
  // const { name, id, mail } = props;
  return (
    <div>
      {data.map(createCart)}
      {/* <div>
        <Cart />
      </div> */}
    </div>
  );
}
