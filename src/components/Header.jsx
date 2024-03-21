import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <h1>Namaste Food</h1>
        </div>
        <div className="right">
          <p>
          <Link to={"/"}>Home</Link>
          </p>
          <p>
            <Link to={"/about"}>About us</Link>
          </p>
          <p><Link to={"/contact"}>Contact</Link></p>
          <p>Cart</p>
        </div>
      </div>
      <div className="header-temp"></div>
    </>
  );
};

export default Header;
