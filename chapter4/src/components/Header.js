import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import properties from "../config/properties";
import useUserOnline from "../hooks/useUserOnline";

export default () => {
  const [btnName, setBtnName] = useState("Login");
  const [btnName2, setBtnName2] = useState("Login");

  /**
   * If dependency array is undefined, useEffect will call on every render of component
   * If dependency array is [], useEffect will called only once on the first render of component
   * If dependency array contains any dependency, useEffect will called only when the dependency changes
   */
  let testVar = 0;
  useEffect(() => {
    console.log("use effect called");
  }, [btnName, btnName2]);
  const isUserOnline = useUserOnline();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={properties.logo_url}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status {isUserOnline ? "🍏" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              if (btnName === "Logout") {
                setBtnName("Login");
              } else {
                setBtnName("Logout");
              }
              testVar += 1;
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
