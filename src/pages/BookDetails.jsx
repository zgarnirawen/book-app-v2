import React from "react";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-center">Book Details</h1>
      <p className="text-center">Book ID: {id}</p>
      {/* Here you can fetch and display detailed book info if needed */}
    </div>
  );
}