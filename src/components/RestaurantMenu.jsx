import "./RestaurantMenu.scss";
import { useEffect, useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { CLOUD_IMAGE_ID, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  console.log(
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards
  );

  if (resInfo === null) return <ShimmerMenu />;

  const {
    areaName,
    avgRating,
    city,
    totalRatingsString,
    cuisines,
    name,
    expectationNotifiers,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

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
      <div className="res-menu-recommended">
        <h3>Recommended</h3>
        <div className="res-menu-items">
          {itemCards.map((data) => (
            <div className="res-menu-rec" key={data.card.info.id}>
              <div className="res-menu-rec-left">
                <h4>{data.card.info.name}</h4>
                <p className="rec-price">
                  ₹{" "}
                  {data?.card?.info?.price / 100 ||
                    data?.card?.info?.defaultPrice / 100}
                </p>
                <p className="desc">{data?.card?.info?.description}</p>
              </div>
              <div className="res-menu-rec-right">
                <img src={CLOUD_IMAGE_ID + data?.card?.info?.imageId} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
