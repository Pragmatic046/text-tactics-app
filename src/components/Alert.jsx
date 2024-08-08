export default function Alert({ alert, Capitalize }) {
  return (
    <>
      <div style={{ height: "90px" }}>
        {alert && (
          <div
            className={`alert rounded-pill alert-${alert.type} alert-dismissible show" role="alert d-flex justify-content-center`}
          >
            <strong>{Capitalize(alert.message)}</strong>
          </div>
        )}
      </div>
    </>
  );
}
