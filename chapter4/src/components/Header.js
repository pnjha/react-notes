import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import properties from "../config/properties";
import useUserOnline from "../hooks/useUserOnline";
import UserContext from "../context/User";

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
  const { loggedInUser, setUserName } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-100 shadow-md m-2 px-1 py-1">
      <div className="logo-container">
        <img className="w-32 shadow-sm" src={properties.logo_url}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">Online Status {isUserOnline ? "🍏" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            <h4>{loggedInUser}</h4>
          </li>
          <button
            className="bg-pink-400 px-4 rounded-md"
            onClick={() => {
              if (btnName === "Logout") {
                setBtnName("Login");
                setUserName("guest");
              } else {
                setBtnName("Logout");
                setUserName("Prakash");
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
