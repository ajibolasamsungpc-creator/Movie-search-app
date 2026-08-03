import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favourite.css";

function Favourite() {
  const { favorites } = useMovieContext();

  return (
    <div className="favourite">
      <h1>⭐ My Favourite Movies</h1>
      {favorites.length === 0 ? (
        <p>You haven't added any favourite yet.</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourite;
