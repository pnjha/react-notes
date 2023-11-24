import React from "react";
import ReactDOM from "react-dom/client";

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
const Footer = () => {};

// Resturant Card
const Resturant = () => (
  <div className="res-card">
    <div>
      <img
        className="res-image"
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
        alt="food image"
      ></img>
    </div>
    <div className="res-name">
      <h3>Andhra Gun Powder</h3>
    </div>
    <div className="res-rating"></div>
    <div className="res-cusines">
      <li>
        <ul>North Indian</ul>
        <ul>South Indian</ul>
        <ul>Italian</ul>
      </li>
    </div>
    <div className="delivery-time"></div>
  </div>
);

// Body Compoent
const Body = () => (
  <div className="body">
    <div className="search">search</div>
    <div className="res-container">
      <Resturant />
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
