import { createContext, useContext, useState } from "react";

// Create context
const MovieContext = createContext();

// Custom Hook for easy usage
export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    };

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    };

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const toggleFavorite = (movie) => {
        if (isFavorite(movie.id)) {
            removeFromFavorites(movie.id);
        } else {
            addToFavorites(movie)
        }
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toggleFavorite
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};
