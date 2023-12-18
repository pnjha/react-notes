import { useRouteError } from "react-router-dom";

export default () => {
  const err = useRouteError();
  console.log(err);
  return <div>OOps</div>;
};
