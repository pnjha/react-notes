import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "guest",
  setUserName: () => {}
});

export default UserContext;
