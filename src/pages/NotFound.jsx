import React from "react";

export default function NotFound() {
  return (
    <div className=" max-w-screen-xl1 mx-auto px-4 py-16 flex flex-col justify-center items-center">
      <span className=" font-bold text-6xl text-amber-300">404</span>
      <h1 className=" text-2xl font-bold ">Page Introuvable</h1>
      <p className=" mt-2">La page demandée n'existe pas.</p>
    </div>
  );
}
