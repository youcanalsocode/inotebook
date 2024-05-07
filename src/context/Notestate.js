import React, { useState } from "react";

import Notecontext from "./Nodecontext";

export default function Notestate(props) {
  const n1 = [
    {
      _id: "663083d6c443e87616af4",
      title: "Book 1",
      Descr: "nehappt",
      tag: "123",
      date: "2024-04-30T05:38:30.809+00:00",
      v: "0",
    },
    {
      _id: "6630kljhioweho8ureo44444ojopujpj",
      title: "life",
      Descr: "golfarcticit",
      tag: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
    {
      _id: "6630kljhiowe343333oojopujpj",
      title: "Game",
      Descr: "golfarcticit",
      tag: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
    {
      _id: "6630kljhi343ooojopujpj",
      title: "water",
      Descr: "golfarcticit",
      tag: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
    {
      _id: "6630kljhioweho8u4545oojopujpj",
      title: "summer",
      Descr: "golfarcticit",
      tag: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
    {
      _id: "6630kljhioweho234435eooojopujpj",
      title: "winter",
      Descr: "golfarcticit",
      tag: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
    {
      _id: "6630kljhio4355eooojopujpj",
      title: "rainy",
      Descr: "golfarcticit",
      tag: "gotnk12g",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    },
  ];
  const [note, setnote] = useState(n1);
  const Addnote = (title, Descr) => {
    console.log(title);
    console.log(Descr);
    const newnote = {
      _id: "6630kljhioweho222222544444eooojopujpj",
      title: title,
      Descr: Descr,
      tag: "gotnk12g_add",
      date: "2024-04-40T05:38:30.809+00:00",
      v: "0",
    };
    // setnote(note.concat(note));
    setnote((note) => [...note, newnote]);
  };

  const Delnote = (id) => {
    // console.log("deleting", id);
    const delnotes = note.filter((note) => {
      return note._id != id;
    });
    setnote(delnotes);
  };
  const Editnote = () => {};

  return (
    <>
      <Notecontext.Provider value={{ note, Addnote, Delnote, Editnote }}>
        {props.children}
      </Notecontext.Provider>
      ;
    </>
  );
}
