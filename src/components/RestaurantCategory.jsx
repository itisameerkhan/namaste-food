import "./RestaurantCategory.scss";
import ItemList from "./ItemList.jsx";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const [showItems, setShowItems] = useState(true);

  console.log(props);
  return (
    <div className="res-menu-recommended">
      <div className="res-menu-title" onClick={() => setShowItems(!showItems)}>
        <h3>
          {props?.data?.title} ({props?.data?.itemCards.length})
        </h3>
        <span className="material-symbols-outlined">
          {showItems ? "keyboard_arrow_down" : "keyboard_arrow_up"}
        </span>
      </div>
      {showItems &&
        props?.data?.itemCards.map((data) => <ItemList data={data} />)}
    </div>
  );
};

export default RestaurantCategory;
