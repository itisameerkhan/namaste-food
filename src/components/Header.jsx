import "./Header.scss";


const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h1>Namaste Food</h1>
      </div>
      <div className="right">
        <p>Home</p>
        <p>About us</p>
        <p>Contact</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;
