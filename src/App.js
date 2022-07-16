import { useState } from "react";
import "./styles.css";
import UseFetch from "./UseFetch";
let BASE = `https://api.github.com/users`;
let API_URL = `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`;
export default function App() {
  const { data, error, loading } = UseFetch(API_URL);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data}
    </div>
  );
}
