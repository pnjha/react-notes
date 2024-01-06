import _ from "lodash";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import MenuCategory from "./MenuCategory.js";
import useResMenu from "../hooks/useResMenu.js";
import { useState } from "react";

export default () => {
  const { res_id: resId } = useParams();
  const [resMenuInfo, setResMenuInfo] = useResMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const { resInfo, menuInfo } = resMenuInfo;
  const { name, cuisines } = resInfo;
  return _.isEmpty(resInfo) ? (
    <Shimmer />
  ) : (
    <div className="menu text-center ml-10 mr-10">
      <h1 className="font-bold m-4 p-4 text-2xl"> {name} </h1>
      <h3 className="font-bold text-xl"> {cuisines.join(", ")} </h3>
      <h2> Menu </h2>
      <button
        className="bg-pink-400 px-4 rounded-md"
        onClick={() => {
          setResMenuInfo({ resInfo, menuInfo: [] });
        }}
      >
        Hide Menu
      </button>
      <ul>
        <div className="menu-item-container">
          {_.filter(
            menuInfo,
            (item) => item?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ).map((item, idx) => {
            const itemCards = _.get(item, "card.card.itemCards", []);
            const title = _.get(item, "card.card.title", "dummy-title");
            return (
              <MenuCategory
                key={title}
                cards={itemCards}
                category={title}
                visibility={idx === showIndex}
                setShowIndex={() => {
                  if (idx === showIndex) {
                    setShowIndex(null);
                  } else {
                    setShowIndex(idx);
                  }
                }}
              />
            );
          })}
        </div>
      </ul>
    </div>
  );
};
