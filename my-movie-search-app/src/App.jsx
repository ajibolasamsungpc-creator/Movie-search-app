import './css/App.css'
import { getPopularMovies, searchMovies } from './services/api.js';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true);

  // Load popular movies
  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async() => {
    setLoading(true);
    try{
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies)
    } catch (error) {
      console.error("Failed to load movies:", error)
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setLoading(true);

    try {
      if (query.trim()) {
        const results = await searchMovies(query);
        setMovies(results);
      } else {
        await loadPopularMovies();
      }
    } catch (error) {
      console.error('Failed to search movies', error);
    } finally {
      setLoading(false);
    }
  };

  return(
    <div className="app">
      <NavBar />
      <main className="main-content">
        <h1>🎬 Movie Explorer</h1>
        <SearchBar onSearch={handleSearch} />

        {loading ? (
          <p> Loading movies...</p>
        ): (
          <>
          {searchQuery && (
            <p>Showing results for: <b>"{searchQuery}"</b></p>
          )}

          <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          {movies.length === 0 && (
            <p>Oops, No movies found. Try a different search!</p>
          )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;