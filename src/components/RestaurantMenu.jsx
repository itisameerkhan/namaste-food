import { useEffect, useState } from "react";
import "./RestaurantMenu.scss";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.91850&lng=76.25580&restaurantId=59491&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    // setResInfo(json?.data?.cards[0]?.card?.card?.info);
  };

  console.log(resInfo);

  return resInfo === null ? <ShimmerMenu /> : (
    <div className="res-menu">
      <h1>Restaurant Menu</h1>
    </div>
  );
};

export default RestaurantMenu;
