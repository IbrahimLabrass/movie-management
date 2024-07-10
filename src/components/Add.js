import React from "react";
import { ResultCard } from "./ResultCard";

export const Add = ({ searchValue, setSearchValue, movies }) => {

  const onChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchValue}
              onChange={onChange}
            />
          </div>

          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.imdbID}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
