import React from "react";

export default function Addnotes() {
  return (
    <div>
      <div>
        <h1>Edit your notes</h1>

        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="Text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Deescrioption
            </label>
            <input
              type="Text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Notes />
        </form>
      </div>
    </div>
  );
}
