import _ from "lodash";
import { useState, useEffect } from "react";
import Resturant from "./Resturant";
import Shimmer from "./Shimmer";
import useUserOnline from "../hooks/useUserOnline";

export default () => {
  const isUserOnline = useUserOnline();
  const [resData, setResData] = useState([]);
  const [filtererdResData, setFiltereredResData] = useState([]);
  const [searchText, setSearchText] = useState("cafe");
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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="searchBtn"
            onClick={() => {
              const filteredData = resData.filter((item) => _.includes(item.info.cuisines, searchText));
              setFiltereredResData(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFiltereredResData(_.filter(resData, (item) => item.info.avgRating > 4.3));
          }}
        >
          Top Rated Resturants
        </button>

        <button
          className="reset-filter"
          onClick={() => {
            setFiltereredResData(resData);
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {filtererdResData.map(
          (res) => (
            <Resturant key={res.info.id} resInfo={res.info} />
          )
          // Resturant({  resInfo: res.info })
        )}
      </div>
    </div>
  );
};
