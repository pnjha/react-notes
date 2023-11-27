import resturantData from "../../swiggy-data.json";
import Resturant from "./Resturant";

export default () => (
  <div className="body">
    <div className="filter">
      <button className="filter-btn" onClick={() => {}}>
        Top Rated Resturants
      </button>
    </div>
    <div className="res-container">
      {resturantData.map(
        (res) => (
          <Resturant key={res.info.id} resInfo={res.info} />
        )
        // Resturant({  resInfo: res.info })
      )}
    </div>
  </div>
);
