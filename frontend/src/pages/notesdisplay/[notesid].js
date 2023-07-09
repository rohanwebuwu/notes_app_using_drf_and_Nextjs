import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

import Displaynotes from "@/pages/Displaynotes";

function id() {
  const router = useRouter();
  if (!router.isReady) return;

  const { notesid } = router.query;
  const route = notesid;
  console.log("route", route);
  let [notes, setnotes] = useState("");
  useEffect(() => {
    fetchnotes();
  }, []);
  async function fetchnotes() {
    // console.log("route", route);
    let res = await axios.get(`http://127.0.0.1:8000/api/notes/${route}/`);

    //console.log("res.data", res);
    setnotes(res.data.body);
  }
  const notesupdate = (e) => {
    e.preventDefault();
    setnotes(e.target.value);

    axios.put(`http://127.0.0.1:8000/api/notes/${route}/update`, {
      body: `${notes}`,
    });
  };
  const deletenote = (e) => {
    axios
      .delete(`http://127.0.0.1:8000/api/notes/${route}/delete`)
      .then((response) => {
        console.log(`this not is deleted`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  
  
  return (
    <>
      <Displaynotes
        notes={notes}
        route={route}
        notesupdatee={notesupdate}
        deletenootes={deletenote}
      />
    </>
  );
}

export default id;
