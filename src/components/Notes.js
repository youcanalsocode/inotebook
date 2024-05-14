import React, { useContext, useEffect } from "react";
import Notecomponent from "./Notecomponent";
import notecntx from "../context/Nodecontext";

export default function Notes() {
  const noteContext = useContext(notecntx); // Context value
  const { note, Fetchnote } = noteContext;
  useEffect(() => {
    Fetchnote();
  }, []);

  return (
    <div className="row my-3">
      <h1>Your Notes</h1>
      {note.map((note) => {
        return <Notecomponent note={note} />;
      })}
    </div>
  );
}
