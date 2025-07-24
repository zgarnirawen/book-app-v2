import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "science_fiction",
  "fantasy",
  "romance",
  "mystery",
  "history",
  "biographies",
];

export default function CategoryMenu() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="category-menu-container">
      <h2>📚 Categories</h2>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category}>
            <button
              className="category-btn"
              onClick={() => handleCategoryClick(category)}
            >
              {category.replace("_", " ").toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
