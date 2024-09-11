import { useEffect, useState } from "react";
import { getAllMovies } from "../api/movieTracker.api";
import { MoviesCard } from "./MoviesCard";

export function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const res = await getAllMovies();
      setMovies(res.data);
    }
    loadMovies();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 justify-items-center">
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
