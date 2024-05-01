import React, { useContext, useEffect } from "react";
import notecntx from "../context/Nodecontext";
import { useBeforeUnload } from "react-router-dom";

export default function About() {
  const a = useContext(notecntx);
  useEffect(() => {
    a.update();
  }, []);
  return (
    <div>
      <h1>This is About {a.state.name} and </h1>
    </div>
  );
}
