import { useDispatch } from "react-redux";
import "./Cart.scss";

const CartItem = (data) => {
  const { id, name, imageId, price } = data.item.data.data.card.info;
  return (
    <div className="cart-item">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
        alt="img"
      />
      <p className="cart-item-name">{name}</p>
      <p className="cart-item-price">₹ {price / 100}</p>
      <p className="cart-item-count">{data.item.count}</p>
    </div>
  );
};

export default CartItem;
