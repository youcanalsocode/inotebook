import React, { useState } from "react";

import Notecontext from "./Nodecontext";

export default function Notestate(props) {
  let host = "http://localhost:5000";
  const n1 = [];

  //Fetchinf all notes from database*******************************************************************************************************
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
  const Addnote = async (title, descr, tag) => {
    //call api
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZjFlMmI4OTA4NjQ4NjlhMjE2NjM4In0sImlhdCI6MTcxNTQxMjU1OX0.whyiCHEyInO7BBeg0PCYD4c6ZJqWdEjyGHhQYEjvnOo",
      },
      body: JSON.stringify({ title, descr, tag }),
    });
    const jsonres = await response.json();
    console.log(jsonres);
    setnote((note) => [...note, jsonres]);
  };
  //Deleting a note*****************************************************************************************************************************************
  const Delnote = async (id) => {
    //calling Api
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",

        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZjFlMmI4OTA4NjQ4NjlhMjE2NjM4In0sImlhdCI6MTcxNTQxMjU1OX0.whyiCHEyInO7BBeg0PCYD4c6ZJqWdEjyGHhQYEjvnOo",
      },
    });
    const jsonres = response.json();
    console.log(jsonres);

    // console.log("deleting", id);
    const delnotes = note.filter((note) => {
      return note._id != id;
    });
    setnote(delnotes);
  };

  //Editing a note*************************************************************************************************************************************************
  const Editnote = async (id, title, descr, tag) => {
    //call api

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZjFlMmI4OTA4NjQ4NjlhMjE2NjM4In0sImlhdCI6MTcxNTQxMjU1OX0.whyiCHEyInO7BBeg0PCYD4c6ZJqWdEjyGHhQYEjvnOo",
      },
      body: JSON.stringify({ title, descr, tag }),
    });
    const updatedNote = await response.json();

    // Update the note state based on the response
    setnote((prevNote) => {
      return prevNote.map((element) => {
        if (element._id === id) {
          return { ...element, title, descr, tag };
        }
        return element;
      });
    });
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
