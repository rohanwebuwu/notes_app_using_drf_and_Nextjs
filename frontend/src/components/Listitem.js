import Link from "next/link";
import React from "react";

function Listitem({ note }) {
  const title=note.body
  const part=title.slice(0,16)

  
  return (
    <>
      <div className=" mx-[200px] ">
        
        <div className=" flex justify-start bg-gray-700 text-white ">
          <p className="text-[40px] ">
            <Link href={`/notesdisplay/${note.id}`}>{part}</Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Listitem;
