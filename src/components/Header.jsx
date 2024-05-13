import useOnlineStatus from "../utils/useOnlineStatus";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="header">
        <div className="left">
          <h1>Namaste Food</h1>
        </div>
        <div className="right">
          <p>online status: {onlineStatus ? "🟢" : "🔴"}</p>
          <p>
            <NavLink to={"/"}>Home</NavLink>
          </p>
          <p>
            <NavLink to={"/about"}>About us</NavLink>
          </p>
          <p>
            <NavLink to={"/contact"}>Contact</NavLink>
          </p>
          <p>
            <NavLink to={"/grocery"}>Grocery</NavLink>
          </p>
          <p>Cart</p>
        </div>
      </div>
      <div className="header-temp"></div>
    </>
  );
};

export default Header;
