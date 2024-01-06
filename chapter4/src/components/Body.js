import _ from "lodash";
import { useState, useEffect } from "react";
import Resturant, { withOpenLabel } from "./Resturant";
import Shimmer from "./Shimmer";
import useUserOnline from "../hooks/useUserOnline";

export default () => {
  const isUserOnline = useUserOnline();
  const [resData, setResData] = useState([]);
  const [filtererdResData, setFiltereredResData] = useState([]);
  const [searchText, setSearchText] = useState("cafe");
  const ResturantOpen = withOpenLabel(Resturant);
  useEffect(() => {
    swiggyData();
  }, []);
  const swiggyData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9480339&lng=77.70830749999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resData = await data.json();
    const restuarants = [];
    for (const card of resData.data.cards) {
      if (
        !_.isEmpty(card.card.card.gridElements) &&
        !_.isEmpty(card.card.card.gridElements.infoWithStyle.restaurants)
      ) {
        restuarants.push(...card.card.card.gridElements.infoWithStyle.restaurants);
      }
    }
    const resInfo = _.uniqBy(restuarants, "info.id");
    console.log(resInfo);
    setResData(resInfo);
    setFiltereredResData(resInfo);
  };
  if (!isUserOnline) {
    return (
      <div>
        <h2>You appear to be offline</h2>
      </div>
    );
  }
  return filtererdResData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border-solid border-pink-600 bg-pink-50 h-10 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-pink-200 rounded-md"
            onClick={() => {
              const filteredData = resData.filter((item) => _.includes(item.info.cuisines, searchText));
              setFiltereredResData(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-pink-200 rounded-md"
            onClick={() => {
              setFiltereredResData(_.filter(resData, (item) => item.info.avgRating > 4.3));
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-pink-400 rounded-md"
            onClick={() => {
              setFiltereredResData(resData);
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filtererdResData.map(
          (res) =>
            res.info.isOpen ? (
              <ResturantOpen key={res.info.id} resInfo={res.info} />
            ) : (
              <Resturant key={res.info.id} resInfo={res.info} />
            )
          // Resturant({  resInfo: res.info })
        )}
      </div>
    </div>
  );
};
