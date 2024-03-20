import "./Body.scss";
import RestaurantCard from "./RestaurantCard.jsx";
import { useState, useEffect } from "react";
import ShimmerList from "./ShimmerList.jsx";

const Body = () => {
  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  let filteredList = listOfRestaurants;
  const handleClick = () => {
    filteredList = listOfRestaurants.filter((value) => {
      return value.info.avgRating > 4.5;
    });
    setListOfRestaurants(filteredList);
  };

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((data) =>
      data.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants([
      ...json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
      ...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    ]);
    setFilteredRestaurant([
      ...json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
      ...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    ]);
  };

  return listOfRestaurants.length === 0 ? (
    <ShimmerList />
  ) : (
    <div className="body">
      <div className="body-main">
        <button className="filter-btn" onClick={handleClick}>
          Filter Top Rated Restaurant
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
      <div className="res-list">
        {filteredRestaurant.map((value, index) => (
          <RestaurantCard data={value} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
