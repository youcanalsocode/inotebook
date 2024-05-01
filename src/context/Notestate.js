import React, { useState } from "react";

import Notecontext from "./Nodecontext";

export default function Notestate(props) {
  const s1 = {
    name: "neha",
    class: "12thb",
  };
  const [state, setstate] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setstate({
        name: "golf",
        class: "12d",
      });
    }, 1000);
  };
  return (
    <>
      <Notecontext.Provider value={{ state, update }}>
        {props.children}
      </Notecontext.Provider>
      ;
    </>
  );
}
