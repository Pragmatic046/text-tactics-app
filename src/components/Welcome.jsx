import "bootstrap/dist/css/bootstrap.min.css";

export default function Welcome({ Start }) {
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center my-5 bg-primary rounded p-5 text-light">
        <h1 className="">Welcome !</h1>
        <p>
          This is <strong>Text Tactics</strong> website, it's just for the ease
          of text layouts, variations and some simple functions
        </p>
        <h6>
          Click <strong>Start</strong> button to initialize the app
        </h6>
        <button
          className="btn btn-danger rounded-pill my-5 fw-bold"
          onClick={Start}
        >
          Start
        </button>
      </div>
    </>
  );
}
