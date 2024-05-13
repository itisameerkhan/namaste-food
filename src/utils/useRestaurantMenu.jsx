import { useEffect } from "react";
import { MENU_API } from "./constants";
import { useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setResInfo(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
