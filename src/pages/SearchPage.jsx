// src/pages/SearchPage.jsx
import React from "react";
import SearchBar from "../components/SearchBar.jsx";

export default function SearchPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-center">Search for Books</h1>
      <SearchBar />
    </div>
  );
}