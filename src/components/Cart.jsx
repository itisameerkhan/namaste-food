import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart">
      <div className="cart-inner">
        <h1>Cart</h1>
        <button onClick={handleClearCart}>CLEAR CART</button>
      </div>
      <div className="cart-main">
        {cartItems.map((data) => (
          <CartItem item={data} key={data.data.data.card.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
