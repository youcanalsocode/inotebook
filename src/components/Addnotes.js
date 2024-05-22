import React, { useContext, useState } from "react";
import notecntx from "../context/Nodecontext";

export default function Addnotes(props) {
  const noteContext = useContext(notecntx); // Context value
  const { Addnote } = noteContext;
  const [note, setnote] = useState({ title: "", descr: "", tag: "" });

  const onclickhandle = (e) => {
    Addnote(note.title, note.descr, note.tag);

    setnote({
      title: "",
      descr: "",
      tag: "",
    });
    e.preventDefault();
    props.showaleart("Note has been added", "success");
  };
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <h1>Edit your notes</h1>

        <form>
          <div className="mb-3">
            <label htmlFor="title" className="Title">
              Title
            </label>
            <input
              type="Text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={note.title}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descr" className="Text">
              description
            </label>
            <input
              type="Text"
              className="form-control"
              id="descr"
              name="descr"
              value={note.descr}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="tag">
              TAG
            </label>
            <input
              type="Text"
              className="form-control"
              id="tag"
              name="tag"
              aria-describedby=""
              value={note.tag}
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
