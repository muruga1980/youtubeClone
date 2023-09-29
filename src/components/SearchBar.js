import React, { useState } from "react";

import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="form-control border-end-0 border rounded-pill"
            type="search"
            value={searchTerm}
            id="example-search-input"
            placeholder="Search here..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="input-group-append">
            <button
              className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
              type="button"
            >
              <i className="bi bi-search"></i>
            </button>
          </span>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
