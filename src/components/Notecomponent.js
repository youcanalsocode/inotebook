import React, { useContext } from "react";
import notecntx from "../context/Nodecontext";

export default function Notecomponent(props) {
  const noteContext = useContext(notecntx); // Context value
  const { Delnote } = noteContext;
  const { note } = props;
  const handledelclick = () => {
    Delnote(note._id);
  };
  return (
    <div class="col-md-3">
      <div className="card">
        <div className="card-body">
          <div class="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i class="fa-solid fa-trash mx-3" onClick={handledelclick}></i>
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
