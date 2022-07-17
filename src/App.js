import { useContext, useState } from "react";
import { Cart, CartState } from "./Context";
import Filters from "./Filters";
import Single from "./Single";

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
      <Filters />
      <div>
        {data.map((items, index) => {
          return (
            <div>
              {items.map((subItems, sIndex) => {
                return <Single subItems={subItems} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
