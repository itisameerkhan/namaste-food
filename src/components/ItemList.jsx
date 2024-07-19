import { useState } from "react";
import { CLOUD_IMAGE_ID } from "../utils/constants";
import nonveg from "../assets/nonveg.svg";
import veg from "../assets/veg.svg";
import bestSeller from "../assets/bestSeller.svg";
import { useDispatch } from "react-redux";
import { addItem, removeItem, updateCart } from "../utils/cartSlice";

const ItemList = (data) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    setCount(count + 1);
    dispatch(
      addItem({
        data: data,
        count: count + 1,
      })
    );
  };

  const handleUpdateCart = () => {
    setCount(count + 1);
    dispatch(
      updateCart({
        data: data,
        count: count + 1,
      })
    );
  };

  const handleRemoveItem = () => {
    setCount(count - 1);
    dispatch(
      removeItem({
        data: data,
        count: count - 1,
      })
    );
  };

  return (
    <div className="res-menu-rec" key={data.data.card.info.id}>
      <div className="res-menu-rec-left">
        <div className="res-above">
          {data.data?.card?.info?.itemAttribute?.vegClassifier == "NONVEG" ? (
            <img src={nonveg} className="veg-svg" />
          ) : (
            <img src={veg} className="veg-svg" />
          )}
          {data.data?.card?.info?.isBestseller ? <img src={bestSeller} /> : ""}
        </div>
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
            <button className="btn-1" onClick={handleAddItem}>
              ADD
            </button>
          ) : (
            <div className="count-btn">
              <button onClick={handleRemoveItem}>-</button>
              <p>{count}</p>
              <button className="right-btn" onClick={handleUpdateCart}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
