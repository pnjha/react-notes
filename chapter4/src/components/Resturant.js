import { Link } from "react-router-dom";
import properties from "../config/properties";

export default ({ resInfo }) => {
  const { id, name, avgRatingString, cuisines, sla, costForTwo, cloudinaryImageId } = resInfo;
  return (
    <Link to={`/res/${id}`}>
      <button className="res-card m-4 p-4 w-[250px] bg-pink-100 rounded-md h-100 hover:cursor-pointer border-black">
        <div>
          <img
            className="res-image rounded-md h-60"
            src={`${properties.cdn_url_base}/${cloudinaryImageId}`}
            alt="food image"
          ></img>
        </div>
        <div className="res-name font-bold py-2 text-lg">
          <h3>{name}</h3>
        </div>
        <div className="res-rating">
          <h5>{avgRatingString} stars</h5>
        </div>
        <div className="res-cusines">
          <h5>{cuisines.join(" ,").substring(0, 20)}...</h5>
        </div>
        <div className="delivery-time">
          <h5>{sla.deliveryTime} minutes</h5>
        </div>
        <div className="cost">
          <h5>{costForTwo}</h5>
        </div>
      </button>
    </Link>
  );
};
