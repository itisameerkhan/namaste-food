import "./RestaurantMenu.scss";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerMenu />;

  const {
    areaName,
    avgRating,
    city,
    totalRatingsString,
    cuisines,
    name,
    expectationNotifiers,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="res-menu">
      <p className="location">
        Home / {city} / <span>{name}</span>
      </p>
      <div className="res-menu-main">
        <div className="res-menu-main-inner">
          <div className="res-menu-main-left">
            <h2 className="name">{name}</h2>
            <p className="cuisine">{cuisines.join(", ")}</p>
            <p className="area">{areaName}</p>
          </div>
          <div className="res-menu-main-right">
            <p className="avg-rating">
              <span className="material-symbols-outlined">star</span>
              {avgRating}
            </p>
            <p className="avg-rating-string">{totalRatingsString}</p>
          </div>
        </div>
        <div className="res-menu-main-down">
          <span className="material-symbols-outlined">directions_bike</span>
          <p>{expectationNotifiers[0].text}</p>
        </div>
      </div>
      {categories.map((data) => (
        <div>
          <RestaurantCategory data={data?.card?.card} />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
