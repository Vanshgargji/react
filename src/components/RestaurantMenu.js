import { useEffect } from "react";

const RestaurantMenu = () => {
  
  useEffect(() => {
    fetchMenu();
  }, []);
  
  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.35449958678775&lng=76.36606219821117&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log("json from res menu", json);
    } catch {
      console.log("not fetched");
    }
    
  };
  
  console.log("restaurant Menu rendered");

  return (
    <div className="Menu">
      <h1>Name of the restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Briyani</li>
        <li>Roti</li>
        <li>Pulao</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
