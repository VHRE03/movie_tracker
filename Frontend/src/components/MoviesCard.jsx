import { Navigate, useNavigate } from "react-router-dom";

export function MoviesCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/movies/${movie.id}`);
      }}
      className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-200 cursor-pointer sm:max-w-sm md:max-w-md lg:max-w-lg"
    >
      <div className="flex justify-center p-4">
        <img
          src={movie.poster}
          alt={movie.titulo}
          className="w-52 h-80 object-cover rounded-md sm:w-60 sm:h-88 md:w-64 md:h-96 lg:w-72 lg:h-[28rem]"
        />
      </div>
      <div className="bg-white p-4">
        <h1 className="text-center text-lg font-semibold">{movie.titulo}</h1>
      </div>
    </div>
  );
}
