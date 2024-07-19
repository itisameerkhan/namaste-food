import "./RestaurantCategory.scss";
import ItemList from "./ItemList.jsx";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="res-menu-recommended">
      <div className="res-menu-title" onClick={() => setShowIndex()}>
        <h3>
          {data?.title} ({data?.itemCards.length})
        </h3>
        <span className="material-symbols-outlined">
          {showItems ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </div>
      {showItems && data?.itemCards.map((data) => <ItemList data={data} />)}
    </div>
  );
};

export default RestaurantCategory;
