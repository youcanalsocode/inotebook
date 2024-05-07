import React, { useContext, useState } from "react";
import Notes from "./Notes";
import notecntx from "../context/Nodecontext";

export default function Addnotes() {
  const noteContext = useContext(notecntx); // Context value
  const { Addnote } = noteContext;
  const [note, setnote] = useState({ title: "", Descr: "" });

  const onclickhandle = (e) => {
    Addnote(note.title, note.Descr);
    e.preventDefault();
  };
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: [e.target.value] });
  };

  return (
    <div>
      <div>
        <h1>Edit your notes</h1>

        <form>
          <div className="mb-3">
            <label for="title" className="Title">
              Title
            </label>
            <input
              type="Text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onchange}
            />
            <div id="title" className="titlw-text"></div>
          </div>
          <div className="mb-3">
            <label for="Descr" className="Text">
              Description
            </label>
            <input
              type="Text"
              className="form-control"
              id="Descr"
              name="Descr"
              onChange={onchange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={onclickhandle}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}
