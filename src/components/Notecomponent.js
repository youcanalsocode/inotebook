import React from "react";

export default function Notecomponent(props) {
  const { note } = props;
  return (
    <div class="col-md-3">
      <div className="card">
        <div className="card-body">
          <div class="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i class="fa-solid fa-trash mx-3"></i>
            <i class="fa-solid fa-pen-to-square mx-3"></i>
          </div>

          <p className="card-text">
            {note.Descr}.......
            <br /> If you wish to add more descr feel free
          </p>
        </div>
      </div>
    </div>
  );
}
