import properties from "../config/properties";

export default ({ name, price, imageId, description, itemRatings }) => {
  return (
    <div className="menu-item-card m-4 p-4 w-[250px] bg-pink-100 rounded-md h-100 hover:cursor-pointer dark:bg-pink-200">
      <div>
        <img
          className="res-image rounded-lg shadow-lg"
          src={`${properties.cdn_url_base}/${imageId}`}
          alt="food image"
        ></img>
      </div>
      <div className="menu-item-name font-bold py-2">
        <h5>{name}</h5>
      </div>
      <div className="menu-item-description">
        <h5>{description}</h5>
      </div>
      <div className="menu-item-rating">
        <h5>{itemRatings} stars</h5>
      </div>
      <div className="menu-item-price">
        <h5>Rs {price}</h5>
      </div>
    </div>
  );
};
