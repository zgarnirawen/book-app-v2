import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaFire, FaSearch, FaHome } from "react-icons/fa";
import Home from "./pages/Home.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import TrendingPage from "./pages/TrendingPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import ToggleButton from "./components/ToggleButton.jsx";
import logo from "./assets/logo.jpg";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with full-width banner */}
      <header className="flex flex-col shadow-md dark:bg-gray-900 dark:text-white">
        <img src={logo} alt="Book App Logo" className="header-banner" />

        {/* Navigation buttons and theme toggle */}
        <div className="header-content">
          <nav className="flex items-center">
            <Link to="/" className="nav-button">
              <FaHome />
              <span>Home</span>
            </Link>
            <Link to="/trending" className="nav-button">
              <FaFire />
              <span>Trending</span>
            </Link>
            <Link to="/search" className="nav-button">
              <FaSearch />
              <span>Search</span>
            </Link>
          </nav>
          <ToggleButton />
        </div>
      </header>

      {/* Main content with routes */}
      <main className="flex-grow p-4 main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer-content">
        © {new Date().getFullYear()} Rawen Zgarni. All rights reserved.
      </footer>
    </div>
  );
}
