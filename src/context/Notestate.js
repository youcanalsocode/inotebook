import React, { useState } from "react";

import Notecontext from "./Nodecontext";

export default function Notestate(props) {
  let host = "http://localhost:5000";
  const n1 = [];

  //Fetchinf all notes from database
  const Fetchnote = async () => {
    //call api
    const response = await fetch(`${host}/api/notes/getnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",

        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZjFlMmI4OTA4NjQ4NjlhMjE2NjM4In0sImlhdCI6MTcxNTQxMjU1OX0.whyiCHEyInO7BBeg0PCYD4c6ZJqWdEjyGHhQYEjvnOo",
      },
    });
    const jsonres = await response.json();
    setnote(jsonres);
    console.log(jsonres);
  };

  const [note, setnote] = useState(n1);

  //Adding a new note*************************************************************************************************************************************
  const Addnote = async (title, Descr) => {
    //call api
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZjFlMmI4OTA4NjQ4NjlhMjE2NjM4In0sImlhdCI6MTcxNTQxMjU1OX0.whyiCHEyInO7BBeg0PCYD4c6ZJqWdEjyGHhQYEjvnOo",
      },
      body: JSON.stringify(title, Descr),
    });
    const jsonres = response.json();

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
  //Deleting a note*****************************************************************************************************************************************
  const Delnote = (id) => {
    // console.log("deleting", id);
    const delnotes = note.filter((note) => {
      return note._id != id;
    });
    setnote(delnotes);
  };

  //Editing a note*************************************************************************************************************************************************
  const Editnote = async (id, title, Descr, tag) => {
    //call api
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",

        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZjFlMmI4OTA4NjQ4NjlhMjE2NjM4In0sImlhdCI6MTcxNTQxMjU1OX0.whyiCHEyInO7BBeg0PCYD4c6ZJqWdEjyGHhQYEjvnOo",
      },
      body: JSON.stringify(title, Descr, tag),
    });
    const jsonres = response.json();
    for (let i = 0; i < note.length; i++) {
      const element = note(i);
      if (element._id == id) {
        element.title = title;
        element.Descr = Descr;
        element.tag = tag;
      }
    }
  };

  return (
    <>
      <Notecontext.Provider
        value={{ note, Addnote, Delnote, Editnote, Fetchnote }}
      >
        {props.children}
      </Notecontext.Provider>
      ;
    </>
  );
}
