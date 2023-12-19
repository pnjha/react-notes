import { Link } from "react-router-dom";
import properties from "../config/properties";

export default ({ resInfo }) => {
  const { id, name, avgRatingString, cuisines, sla, costForTwo, cloudinaryImageId } = resInfo;
  return (
    <Link to={`/res/${id}`}>
      <button className="res-card">
        <div>
          <img className="res-image" src={`${properties.cdn_url_base}/${cloudinaryImageId}`} alt="food image"></img>
        </div>
        <div className="res-name">
          <h3>{name}</h3>
        </div>
        <div className="res-rating">
          <h5>{avgRatingString} stars</h5>
        </div>
        <div className="res-cusines">
          <h5>{cuisines.join(" ,")}</h5>
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
