import axios from "axios";
import React from "react";
import Listitem from "@/components/Listitem";
import { useState, useEffect } from "react";
import Link from "next/link";

function Noteslistpage() {
  let [notes, setnotes] = useState([]);

  useEffect(() => {
    getnotes();
  }, []);
  async function getnotes() {
    let response = await axios.get("http://127.0.0.1:8000/api/notes");

    console.log("res", response.data);
    setnotes(response.data);

    const len = response.length;
  }

  const len = notes.length;

  return (
    <div>
      <Link href="/Inputnotes">
      <button>create</button>
      </Link>
      <a href="http://127.0.0.1:8000/api/notes">take me api views</a>
      {notes.map((note, id) => (
        
        <h3>
          
          <Listitem key={id} note={note} />
        </h3>
      ))}
    </div>
  );
}

export default Noteslistpage;
