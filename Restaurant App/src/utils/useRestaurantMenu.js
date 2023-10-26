import { useEffect, useState } from "react";
import { RESTRO_MENU_API_HEAD, RESTRO_MENU_API_TAIL } from "./constants";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
         RESTRO_MENU_API_HEAD + resId + RESTRO_MENU_API_TAIL
         ).then((res) => (res.json()));

    setResInfo(response.data)
  }

  return resInfo;
};
export default useRestaurantMenu;
