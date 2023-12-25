import _ from "lodash";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import useResMenu from "../hooks/useResMenu.js";

export default () => {
  const { res_id: resId } = useParams();
  const [resMenuInfo, setResMenuInfo] = useResMenu(resId);
  const { resInfo, menuInfo } = resMenuInfo;
  const { name, cuisines } = resInfo;
  return _.isEmpty(resInfo) ? (
    <Shimmer />
  ) : (
    <div className="menu m-8">
      <h1 className="font-bold"> {name} </h1>
      <h3> {cuisines.join(", ")} </h3>
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
        <div className="menu-item-container flex flex-wrap">
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
