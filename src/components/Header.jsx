import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <h1>Namaste Food</h1>
        </div>
        <div className="right">
          <p>
          <NavLink to={"/"}>Home</NavLink>
          </p>
          <p>
            <NavLink to={"/about"}>About us</NavLink>
          </p>
          <p><NavLink to={"/contact"}>Contact</NavLink></p>
          <p>Cart</p>
        </div>
      </div>
      <div className="header-temp"></div>
    </>
  );
};

export default Header;
