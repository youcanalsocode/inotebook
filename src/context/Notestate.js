import React, { useState } from "react";

import Notecontext from "./Nodecontext";

export default function Notestate(props) {
  // const s1 = {
  //   name: "neha",
  //   class: "12thb",
  // };
  // const [state, setstate] = useState(s1);
  // const update = () => {
  //   setTimeout(() => {
  //     setstate({
  //       name: "golf",
  //       class: "12d",
  //     });
  //   }, 1000);
  // };
  const n1 = [
    {
      id: "663083d6c475e4ae87616af4",
      name: "neha",
      email: "nehappt",
      password: "123",
      date: "2024-04-30T05:38:30.809+00:00",
      v: "0",
    },
    {
      id: "6630kljhioweho8ureooojopujpj",
      name: "golf",
      email: "golfarcticit",
      password: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
    {
      id: "6630kljhioweho8ureooojopujpj",
      name: "golf",
      email: "golfarcticit",
      password: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
    {
      id: "6630kljhioweho8ureooojopujpj",
      name: "golf",
      email: "golfarcticit",
      password: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
    {
      id: "6630kljhioweho8ureooojopujpj",
      name: "golf",
      email: "golfarcticit",
      password: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
    {
      id: "6630kljhioweho8ureooojopujpj",
      name: "golf",
      email: "golfarcticit",
      password: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
    {
      id: "6630kljhioweho8ureooojopujpj",
      name: "golf",
      email: "golfarcticit",
      password: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
  ];

  const [note, setnote] = useState(n1);

  return (
    <>
      <Notecontext.Provider value={{ note, setnote }}>
        {props.children}
      </Notecontext.Provider>
      ;
    </>
  );
}
