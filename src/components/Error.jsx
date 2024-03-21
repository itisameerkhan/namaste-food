import { NOT_FOUND } from "../utils/constants";
import "./Error.scss";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error">
      <img src={NOT_FOUND} alt="" />
      <h1>OOPS! Something went wrong</h1>
      <h2>
        {error.status} {error.statusText}
      </h2>
    </div>
  );
};

export default Error;
