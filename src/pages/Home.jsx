// src/pages/Home.jsx
import React from "react";
import CategoryMenu from "../components/CategoryMenu.jsx";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-center">Select a Category</h1>
      <CategoryMenu />
    </div>
  );
}


