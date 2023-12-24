import { useState, useEffect } from "react";

export default useResMenu = (resId) => {
  const [resMenuInfo, setResMenuInfo] = useState({ resInfo: {}, menuInfo: {} });
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9530189&lng=77.7088108&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    const resInfo = json?.data?.cards[0]?.card?.card?.info;
    const menuInfo = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setResMenuInfo({ resInfo, menuInfo });
  };
  return [resMenuInfo, setResMenuInfo];
};
