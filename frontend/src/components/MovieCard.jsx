import React, { useEffect, useState } from 'react'
import { checkIfFavorite, toggleFavorite } from '../appwrite'




 const MovieCard = ({ movie, movie: { id, title, vote_average, poster_path, release_date, original_language, overview, genre_ids } }) => {
    
    const[isFavorite, setIsFavorite] = useState(false);
    const[isLoading, setIsLoading] = useState(false);

     useEffect(() => {
        checkFavoriteStatus();
    },[id]);

    const checkFavoriteStatus = async () => {
        const favorite = await checkIfFavorite(id);
        setIsFavorite(favorite);
    }

    const handleFavoriteToggle = async() => {
        if (isLoading) return;

        setIsLoading(true);

        const success = await toggleFavorite(movie, isFavorite);
        if (success) {
            setIsFavorite(!isFavorite);
        }

        setIsLoading(false);
    }

    return (
    <div className='movie-card'>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/No-Poster.png'}
        alt='title'
        />
        <div className='mit-4'>
            <h3>{title}</h3>
            <div className='content'>
                <div className='rating'>
                    <img src='star.svg' alt='Star Icon'/>
                    <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                </div>
                <span>•</span>
                <p className='lang'>{original_language}</p>'
                <span>•</span>
                <p className='year'>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                <span>•</span>
                <p>
                    <button
                        onClick={handleFavoriteToggle}
                        disabled={isLoading}
                        style={{
                            background:'none',
                            border: 'none',
                            cursor: isLoading ? 'default' : 'pointer',
                            color: isFavorite ? 'red' : 'grey',
                            padding: '4px',
                            display: 'inline-flex',
                            alignItems: 'center'
                        }}
                    >
                    <svg width='14' height='14' fill='currentColor' viewBox='0 0 16 13'>
                        <path d={
                        isFavorite 
                            ? "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" // Filled heart path
                            : "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" // Outlined heart path
                        } />
                    </svg>
                    </button>
                </p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard
