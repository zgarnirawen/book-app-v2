// src/pages/CategoryPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookList from "../components/BookList.jsx";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCategoryBooks() {
      setLoading(true);
      try {
        const response = await fetch(`https://openlibrary.org/subjects/${categoryName}.json?limit=20`);
        const data = await response.json();
        const mappedBooks = (data.works || []).map((work) => ({
          key: work.key,
          title: work.title,
          author_name: work.authors ? work.authors.map((a) => a.name) : ["Unknown Author"],
          cover_i: work.cover_id || null,
        }));
        setBooks(mappedBooks);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load books for this category.");
      } finally {
        setLoading(false);
      }
    }
    fetchCategoryBooks();
  }, [categoryName]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Books in: {categoryName.replace("_", " ").toUpperCase()}
      </h1>
      {loading && <p className="text-center">Loading books...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && <BookList books={books} />}
    </div>
  );
}