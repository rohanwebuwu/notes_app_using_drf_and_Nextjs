import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Link from "next/link";
function Displaynotes({ notes, route, notesupdatee,deletenootes }) {
  console.log("notes", notes);
 
  return (
    <>
      <Header />
      <div className=" ">this is note no. {route}</div>
      <Link href={"/"}>
      <button onClick={deletenootes}>delete note</button>
      </Link>
      <textarea defaultValue={notes} onChange={notesupdatee}></textarea>
    </>
  );
}

export default Displaynotes;
