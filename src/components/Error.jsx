import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container p-5 m-3" id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <h5>{`${error.status} Page ${error.statusText}`}</h5>
      <h5>{`${error}`}</h5>
    </div>
  );
}
