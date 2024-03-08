import "./Body.scss";
import { data } from "../utils/constants";
import RestaurantCard from "./RestaurantCard.jsx";
import { useState, useEffect } from "react";
import ShimmerList from "./ShimmerList.jsx";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  let filteredList = listOfRestaurants;
  const handleClick = () => {
    filteredList = listOfRestaurants.filter((value) => {
      return value.info.avgRating > 4.5
    });
    setListOfRestaurants(filteredList)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    console.log([json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants, json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants]);
    setListOfRestaurants([...json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants, ...json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants])
  }

  if(listOfRestaurants.length === 0) return <ShimmerList />
  return (
    <div className="body">
      <button className="filter-btn" onClick={handleClick}>
        Filter Top Rated Restaurant
      </button>
      <div className="res-list">
        {listOfRestaurants.map((value, index) => (
          <RestaurantCard data={value} key={index} />
        ))}
      </div>
    </div> 
  );
};

export default Body;
