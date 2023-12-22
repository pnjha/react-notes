import _ from "lodash";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";

export default () => {
  const [resInfo, setResInfo] = useState({});
  const [menuInfo, setMenuInfo] = useState({});
  const { res_id: resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9530189&lng=77.7088108&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    // 10866
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
    setMenuInfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    return json;
  };
  const { name, cuisines } = resInfo;
  console.log(menuInfo);
  return _.isEmpty(resInfo) ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1> {name} </h1>
      <h3> {cuisines.join(", ")} </h3>
      <h2> Menu </h2>
      <ul>
        <div className="menu-item-container">
          {_.map(menuInfo, (item) =>
            _.map(item?.card?.card?.itemCards, (member) => {
              const info = _.get(member, "card.info", {});
              if (!_.isEmpty(info.imageId)) {
                return (
                  <MenuItem
                    key={info.id}
                    name={info.name}
                    price={parseInt(info.price ?? info.defaultPrice) / 100}
                    imageId={info.imageId}
                    description={info.description}
                    itemRatings={info.ratings.aggregatedRating.rating}
                  />
                );
              }
            })
          )}
        </div>
      </ul>
    </div>
  );
};