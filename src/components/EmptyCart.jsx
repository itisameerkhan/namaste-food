import "./Cart.scss";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <img
        src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png?f=webp"
        alt="img"
      />
      <h3>Your cart is empty</h3>
      <p>You can go to home page to view more restaurants</p>
    </div>
  );
};

export default EmptyCart;
