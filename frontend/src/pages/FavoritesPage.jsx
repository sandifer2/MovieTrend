import React, { use, useEffect, useState} from 'react';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import { getFavoriteMovies } from '../services/appwrite';


const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const API_READ_TOKEN = import.meta.env.VITE_TMDB_API_READ_TOKEN
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_READ_TOKEN}`
    }
}



const FavoritesPage = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);



const loadFavoriteMovies = async () => {
try {
    const movies = await getFavoriteMovies();
    setFavoriteMovies(movies);
} catch (error) {
    console.error('Error loading favorite movies:', error);
}
}

useEffect(() => {
    loadFavoriteMovies();
}, []);


    return (
        <div className='pattern'>
        <div className='wrapper'>
            <header>
                <h1>Your <span className='text-gradient'>Favorites</span></h1>
            </header>
            {favoriteMovies.length > 0 &&(
            <section className='favorite-movies'>
                <ul>
                    {favoriteMovies.map((movie, index) => (
                        <li key={movie.$id}>
                            <p>{index +1} </p>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_url}`} alt={movie.title} />
                        </li>
                    ))}
                </ul>
            </section>
            )}
            

        </div>
        </div>
    )
}

export default FavoritesPage;
