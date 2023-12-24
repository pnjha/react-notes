import { useEffect, useState } from "react";

export default useUserOnline = () => {
  const [userOnlineStatus, setUserOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setUserOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setUserOnlineStatus(false);
    });
  }, []);
  return userOnlineStatus;
};
