"use client";
import Header from "@/components/Header";
import Noteslistpage from "@/pages/Noteslistpage";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-[50px] uppercase text-center ">
        <Header />
      </div>
      <Noteslistpage />
    </>
  );
}
