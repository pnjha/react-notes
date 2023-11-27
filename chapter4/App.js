import React from "react";
import ReactDOM from "react-dom/client";
import resturantData from "./swiggy-data.json";

// Header component
const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src="https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png"></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

// Footer Component
const Footer = () => {
  return <div className="footer"></div>;
};

// Resturant Card
const Resturant = ({ resInfo }) => {
  const { name, avgRatingString, cuisines, sla, costForTwo, cloudinaryImageId } = resInfo;
  return (
    <div className="res-card">
      <div>
        <img
          className="res-image"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="food image"
        ></img>
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
    </div>
  );
};

// Body Compoent
const Body = () => (
  <div className="body">
    <div className="search">search</div>
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

const PageLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PageLayout />);
