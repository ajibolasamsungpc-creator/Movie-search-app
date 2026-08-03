
import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext";

function MovieCard({movie}) {
    const { isFavorite, toggleFavorite } = useMovieContext();

    const favorite = isFavorite(movie.id);

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        toggleFavorite(movie);
    };

    return(
        <div className="movie-card">
            <img 
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
            alt={movie.title} 
            />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split('-')[0]} • ⭐ {movie.vote_average} </p>
                <button
                    onClick={handleFavoriteClick}
                    className={favorite ? 'favorited' : ''} // Dynamic css class
                >
                    {favorite ? '🖤 Remove from Favorite' : '❤️ Add to Favorite'}
                </button>
            </div>
        </div>
    )
}
export default MovieCard;