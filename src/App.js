import { useContext, useState } from "react";
import { Cart, CartState } from "./Context";

import "./styles.css";
import UseFetch from "./UseFetch";
let BASE = `https://api.github.com/users`;
let API_URL = `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`;
export default function App() {
  const {
    state: { data }
  } = CartState();
  // console.log(data);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {data.map((items, index) => {
          return (
            <div>
              {items.map((subItems, sIndex) => {
                return <h3> {subItems.name} </h3>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
