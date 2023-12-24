import { useState, useEffect } from "react";

const Member = ({ name }) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log("member use effect 1");
    const userInfo = getUser();
  }, []);
  //perfectly valid
  useEffect(() => {
    console.log("member use effect 2");
    const setintervalid = setInterval(() => {
      console.log("member functional component set interval");
    }, 2000);
    return () => {
      clearInterval(setintervalid);
    }; // called when your are unmounting
  }, []);
  const getUser = async () => {
    const res = await fetch("https://api.github.com/users/pnjha");
    const json = await res.json();
    setUser(json);
  };
  return (
    <button
      className="member-card"
      onMouseOver={() => {
        setCount(count + 1);
      }}
    >
      <img className="user-image" src={`${user.avatar_url}`} alt="user image"></img>
      <h3>Name: {user.name}</h3>
      <h3>Location: {user.location}</h3>
      <h3>Company: {user.company}</h3>
      <h3>Count: {count}</h3>
    </button>
  );
};
export default Member;
