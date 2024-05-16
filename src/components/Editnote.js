import React, { useContext, useState, useEffect } from "react";
import Notes from "./Notes";
import notecntx from "../context/Nodecontext";

export default function Editnote(props) {
  const noteContext = useContext(notecntx); // Context value
  const { Editnote } = noteContext;
  const { currentnote, closemodel } = props;
  const [note, setnote] = useState({
    title: currentnote ? currentnote.title : "",
    descr: currentnote ? currentnote.descr : "",
    tag: currentnote ? currentnote.tag : "",
  });

  useEffect(() => {
    // Update the state when currentnote changes
    setnote({
      title: currentnote ? currentnote.title : "",
      descr: currentnote ? currentnote.descr : "",
      tag: currentnote ? currentnote.tag : "",
    });
  }, [currentnote]);

  const onclickhandle = (e) => {
    console.log(note.title, note.descr, note.tag);
    console.log(currentnote._id);

    Editnote(currentnote._id, note.title, note.descr, note.tag);
    closemodel();
    e.preventDefault();
  };
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value });
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
              value={note.title}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label for="descr" className="Text">
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
            <label for="tag" className="tag">
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
            data-bs-dismiss="modal"
            onClick={onclickhandle}
          >
            Update Note
          </button>
        </form>
      </div>
    </div>
  );
}
