import React, { use, useEffect, useState} from 'react';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import { getFavoriteMovies } from '../services/appwrite';






const FavoritesPage = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');



const loadFavoriteMovies = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
        const movies = await getFavoriteMovies();
        setFavoriteMovies(movies);
    } catch (error) {
        console.error('Error loading favorite movies:', error);
        setErrorMessage('Failed to load favorite movies');
    } finally {
        setIsLoading(false);
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

            {isLoading ? (
                <Spinner />
            ) : errorMessage ? (
                <p className='text-red-500'>{errorMessage}</p>
            ) : (
                <section className='all-movies'>
                    <ul>
                        {favoriteMovies.map((movie) => (
                           <MovieCard 
                                key={movie.$id} 
                                movie={{
                                    id: movie.movie_id,
                                    title: movie.title,
                                    poster_path: movie.poster_url,
                                    overview: movie.overview,
                                    release_date: movie.release_date,
                                    vote_average: movie.vote_average,
                                    genre_ids: JSON.parse(movie.genre_ids || '[]')
                                }} 
                            />
                        ))}
                    </ul>
                </section>
            )}
            

        </div>
        </div>
    )
}

export default FavoritesPage;
