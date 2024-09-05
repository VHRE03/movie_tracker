import { Navigate, useNavigate } from "react-router-dom";

export function MoviesCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/movies/${movie.id}`);
      }}
    >
      <h1>{movie.titulo}</h1>
      <img src={movie.poster} alt=""></img>
    </div>
  );
}
