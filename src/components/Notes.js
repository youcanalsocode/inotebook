import React, { useContext, useEffect, useRef, useState } from "react";
import Notecomponent from "./Notecomponent";
import notecntx from "../context/Nodecontext";
import Editnote from "./Editnote";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Notes() {
  const noteContext = useContext(notecntx); // Context value
  const { note, Fetchnote } = noteContext;
  const [currentnote, setCurrentNote] = useState(null);

  useEffect(() => {
    Fetchnote();
  }, []);
  const ref = useRef(null);
  const updatenote = (currentnote) => {
    // ref.current.click();
    setCurrentNote(currentnote);
    console.log(currentnote);

    if (ref.current) {
      ref.current.click();
      console.log("ref.curent is working");
    } else {
      console.error("Modal button ref is null");
    }
  };

  return (
    //Creating a modal***************************************************************************

    <>
      {/* Button to trigger modal */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: "none" }}
      >
        Open Modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Editnote currentnote={currentnote}></Editnote>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1>Your Notes</h1>
        {note.map((note) => {
          return (
            <Notecomponent key={note._id} updatenote={updatenote} note={note} />
          );
        })}
      </div>
    </>
  );
}
