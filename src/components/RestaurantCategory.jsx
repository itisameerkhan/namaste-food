import "./RestaurantCategory.scss";
import { CLOUD_IMAGE_ID } from "../utils/constants.js";
import ItemList from "./ItemList.jsx";

const RestaurantCategory = (props) => {
  console.log(props);
  return (
    <div className="res-menu-recommended">
      <div className="res-menu-title">
        <h3>
          {props?.data?.title} ({props?.data?.itemCards.length})
        </h3>
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </div>
      {props?.data?.itemCards.map((data) => (
        <ItemList data={data} />
      ))}
    </div>
  );
};

export default RestaurantCategory;
