import { useDispatch } from "react-redux";
import properties from "../config/properties";

export default ({ id, name, price, imageId, description, itemRatings }) => {
  return (
    <div className="p-2 m-4 border-b-2 border-gray-100 text-left">
      <div className="flex justify-between">
        <span className="w-10/12">
          <h4>Name: {name}</h4>
          {description ? <h5>Description: {description}</h5> : <></>}
          <h5>Ratings: {itemRatings} ⭐ </h5>
          <h5>Rs {price}</h5>
        </span>
        <span className="w-2/12">
          <img className="rounded-lg shadow-lg" src={`${properties.cdn_url_base}/${imageId}`} alt="food image" />
        </span>
      </div>
    </div>
  );
};
