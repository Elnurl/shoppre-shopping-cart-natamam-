import React, { useState } from "react";
import data from "../Data";
import "./cart.css";
import selectedProduct from "./cartcompanents/shop_data";

// function addBtn() {
//   return;
// }

// export default function App() {
//   const [arr, setArr] = useState([]);
//   return (
//     <div className="App">
//       <button onClick={() => setArr((oldArray) => [...oldArray, "foo"])}>
//         add
//       </button>
//       <div>
//         {arr.map((a, i) => (
//           <p key={i}>{a}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

function Cart(props) {
  // const [arr, setArr] = useState();
  const state = useState(data);
  console.log(state[0][0].id);
  function addBtn() {
    selectedProduct.push(data[`${props.id}`]);
  }
  function removeBtn() {
    selectedProduct = selectedProduct.filter(function (value, index, arr) {
      return data[0].id !== props.id;
    });
    return selectedProduct;
  }

  return (
    <div className="cart">
      {" "}
      <div className="cart_element">
        <div className="img">
          {" "}
          <img src={props.image} alt=".png" />{" "}
        </div>
        <div>
          {" "}
          <h4>{props.name}</h4>
          <h2>{props.price}</h2>
        </div>
        <button onClick={addBtn}>Add to Cart</button>
        <button onClick={removeBtn}>remove</button>
      </div>
    </div>
  );
}

export default Cart;
