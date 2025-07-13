import { useEffect , useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const data = await fetch( `https://server-swiggy.onrender.com/api/menu?resId=${resId}`);

    const json = await data.json();
    console.log(json);
    setMenuItems(json.data);
  };

  return menuItems;
};
export default useRestaurantMenu;
