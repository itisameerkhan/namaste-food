import "./RestaurantCard.scss";
import { CLOUD_IMAGE_ID } from "../utils/constants";
import rating from "../assets/rating.svg";

const RestaurantCard = ({ data }) => {
  return (
    <div className="res-card">
      <div className="res-card-img">
        <img
          src={CLOUD_IMAGE_ID + data?.info?.cloudinaryImageId}
          alt="res-img"
        />
        <div className="img-overlay"></div>
        {data?.info?.aggregatedDiscountInfoV3?.header && (
          <p className="cost-for-two">{`${data?.info?.aggregatedDiscountInfoV3?.header} ${data?.info?.aggregatedDiscountInfoV3?.subHeader}`}</p>
        )}
      </div>
      <p className="title">{data?.info?.name}</p>
      <div className="res-card-desc">
        <img src={rating} className="rating" />
        <p>{data?.info?.avgRatingString}</p> -
        <p>{data?.info?.sla?.slaString}</p>
      </div>
      <p className="cuisines">{data?.info?.cuisines.join(", ")}</p>
      <p className="areaname">{data?.info?.areaName}</p>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return ({ data }) => {
    return (
      <div className="with-veg">
        <p className="veg-label">Veg</p>
        <div className="veg-div"></div>
        <RestaurantCard data={data} />
      </div>
    );
  };
};

export default RestaurantCard;
