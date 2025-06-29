import { useEffect , useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3610131&lng=76.37323889999999&restaurantId=" +  resId
    );
    const json = await data.json();
    console.log(json);
    setMenuItems(json.data);
  };

  return menuItems;
};
export default useRestaurantMenu;
