import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
function Inputnotes() {
  let [inputnotes, setinputnotes] = useState("");
  function handleinput(e) {
    e.preventDefault();
    setinputnotes(e.target.value);
    console.log("inputnotes", inputnotes);
  }

  const createnote = (e) => {
    axios
      .post("http://127.0.0.1:8000/api/notes/create", {body: `${inputnotes}`}
        
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <Link href="/">/--</Link>
      enter your new note here
      <input type="text" onChange={handleinput} />
      <Link href="/">
      <button onClick={createnote}>submit</button>
      </Link>
      <a href="http://127.0.0.1:8000/api/notes/create">take me django views</a>
    </>
  );
}

export default Inputnotes;
