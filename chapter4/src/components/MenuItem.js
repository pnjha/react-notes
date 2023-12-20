import properties from "../config/properties";

export default ({ name, price, imageId, description, itemRatings }) => {
  return (
    <div className="menu-item-card">
      <div>
        <img className="res-image" src={`${properties.cdn_url_base}/${imageId}`} alt="food image"></img>
      </div>
      <div className="menu-item-name">
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
