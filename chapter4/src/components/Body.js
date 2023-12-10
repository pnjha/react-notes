import _ from "lodash";
import { useState } from "react";
import resturantData from "../../swiggy-data.json";
import Resturant from "./Resturant";

export default () => {
  const [resData, setResData] = useState(resturantData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setResData(_.filter(resData, (item) => item.info.avgRating > 4.3));
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {resData.map(
          (res) => (
            <Resturant key={res.info.id} resInfo={res.info} />
          )
          // Resturant({  resInfo: res.info })
        )}
      </div>
    </div>
  );
};
