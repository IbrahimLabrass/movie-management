import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "path/to/default-poster.jpg"}
        alt={`${movie.Title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
