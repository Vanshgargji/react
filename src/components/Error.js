//  this hook gives us more information about the error , previously we are using "react-router-DOM" but now react-router
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>something went wrong!!</h2>
      <h3>
        {err.statusText} : {err.status} 
      </h3>
    </div>
  );
};

export default Error;
