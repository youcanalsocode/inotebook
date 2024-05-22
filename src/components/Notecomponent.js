import React, { useContext } from "react";
import notecntx from "../context/Nodecontext";

export default function Notecomponent(props) {
  const noteContext = useContext(notecntx); // Context value
  const { Delnote } = noteContext;
  const { note, updatenote } = props;
  const handledelclick = () => {
    Delnote(note._id);
    props.showaleart("Note has been deleted succesfully", "danger");
  };
  return (
    <div className="col-md-3  my-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash mx-3" onClick={handledelclick}></i>
            <i
              className="fa-solid fa-pen-to-square mx-3"
              onClick={() => {
                console.log("button clicked");
                updatenote(note);
              }}
            ></i>
          </div>

          <p className="card-text">
            {note.descr}.......
            <br /> If you wish to add more descr feel free
          </p>
        </div>
      </div>
    </div>
  );
}
