import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function About({ mode }) {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div
          className={`accordion-item bg-${
            mode === "dark" ? "dark" : "light"
          } text-${mode === "light" ? "dark" : "light"}`}
        >
          <h2 className={`accordion-header `}>
            <button
              className={`accordion-button  bg-${
                mode === "dark" ? "dark" : "light"
              } text-${mode === "light" ? "dark" : "light"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Browser Compatibility </strong> is shown by default, to
              show that this software can be run on Chrome, Firefox, Microsoft
              Edge, Brave and many more except the{" "}
              <code>Internet Explorer</code>.
            </div>
          </div>
        </div>

        <div
          className={`accordion-item bg-${
            mode === "dark" ? "dark" : "light"
          } text-${mode === "light" ? "dark" : "light"}`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button bg-${
                mode === "dark" ? "dark" : "light"
              } text-${mode === "light" ? "dark" : "light"} collapsed`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Any Individual or Organization</strong> could freely use
              it, and having no any <code>license</code> or{" "}
              <code>copyright</code> restrictions globally.
            </div>
          </div>
        </div>

        <div
          className={`accordion-item bg-${
            mode === "dark" ? "dark" : "light"
          } text-${mode === "light" ? "dark" : "light"}`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button bg-${
                mode === "dark" ? "dark" : "light"
              } text-${mode === "light" ? "dark" : "light"} collapsed`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>🌟 Credits 🌟</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The development of the <strong>Text Tactics</strong> Website App
              owes its success to the dedication and expertise of{" "}
              <strong className="text-danger">Mr Abdul Ahad Khan</strong> and
              <strong className="text-danger"> Mr Muhammad Haris</strong>. These
              talented developers have invested their invaluable time and skills
              to create an innovative and user-friendly tool that serves a
              global audience. Their commitment to excellence and passion for
              technology have resulted in a remarkable application that stands
              out for its authenticity and enthusiasm. We extend our heartfelt
              gratitude to both Mr. Abdul Ahad Khan and Mr. Muhammad Haris for
              their significant contributions to this project.
              <br />
              <br />
              <strong className="text-light text-bg-dark rounded ">
                ✨ Thank you for your hard work and creativity! ✨
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
