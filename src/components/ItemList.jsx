import { useState } from "react";
import { CLOUD_IMAGE_ID } from "../utils/constants";

const ItemList = (data) => {
  const [count, setCount] = useState(0);

  return (
    <div className="res-menu-rec" key={data.data.card.info.id}>
      <div className="res-menu-rec-left">
        <h4>{data.data.card.info.name}</h4>
        <p className="rec-price">
          ₹{" "}
          {data.data?.card?.info?.price / 100 ||
            data.data?.card?.info?.defaultPrice / 100}
        </p>
        <p className="desc">{data.data?.card?.info?.description}</p>
      </div>
      <div className="res-menu-rec-right">
        <img src={CLOUD_IMAGE_ID + data.data?.card?.info?.imageId} alt="img" />
        <div className="add-btn">
          {count === 0 ? (
            <button className="btn-1" onClick={() => setCount(count + 1)}>
              ADD
            </button>
          ) : (
            <div className="count-btn">
              <button onClick={() => setCount(count - 1)}>-</button>
              <p>{count}</p>
              <button className="right-btn" onClick={() => setCount(count + 1)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
