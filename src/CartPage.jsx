import { CartState } from "./Context";

function CartPage() {
  const {
    state: { cart },
    dispatch
  } = CartState();

  return (
    <div>
      <h2>Inside the Cart</h2>
      {cart.map((ele) => (
        <div>{ele.name}</div>
      ))}
    </div>
  );
}

export default CartPage;
