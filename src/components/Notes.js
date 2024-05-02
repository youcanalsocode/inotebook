import React, { useContext } from "react";
import Notecomponent from "./Notecomponent";
import notecntx from "../context/Nodecontext";

export default function Notes() {
  const noteContext = useContext(notecntx); // Context value
  const { note } = noteContext;
  return (
    <div class="row my-3">
      <h1>Your Notes</h1>
      {note.map((note) => {
        return <Notecomponent note={note} />;
      })}
    </div>
  );
}
