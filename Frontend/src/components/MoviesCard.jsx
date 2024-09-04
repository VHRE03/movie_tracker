export function MoviesCard({ movie }) {
  return (
    <div>
      <h1>{movie.titulo}</h1>
      <img src={movie.poster} alt=""></img>
    </div>
  );
}
