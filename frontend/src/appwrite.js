import { Client, Databases, Query, ID } from 'appwrite'

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const FAV_COLLECTION_ID = import.meta.env.VITE_APPWRITE_FAV_COLLECTION_ID;

const appwrite_client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID)

const database = new Databases(appwrite_client)


export const updateSearchCount = async(searchTerm, movie) => {
    try{
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm)
        ])

        if (result.documents.length > 0) {
            const doc = result.documents[0];

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1
            })
        } else{
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            })
        }
    } catch(error){
        console.log('Appwrite error:', error);
        // Don't throw the error - let the app continue working without analytics
    }

}

export const getTrendingMovies = async() => {
    try{
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc("count")
        ]);
        return result.documents;
    } catch(error){

    }

}

export const checkIfFavorite = async (movieId) => {
    try{
        const result = await database.listDocuments(
            DATABASE_ID,
            FAV_COLLECTION_ID,
            [Query.equal('movie_id', movieId)]
        );

        return result.documents.length > 0;
    } catch(error) {
        console.error('Error checking if movie favorited:', error);
        return false;
    }
};

export const addFavoriteMovie = async (movie) => {
    try{
        await database.createDocument(
            DATABASE_ID,
            FAV_COLLECTION_ID,
            ID.unique(),
            {
                movie_id: movie.id,
                title: movie.title,
                poster_url: movie.poster_path,
                overview: movie.overview,
                release_date: movie.release_date,
                vote_average: movie.vote_average,
                genre_ids: JSON.stringify(movie.genre_ids)
            }
        );

        return true;
    } catch(error) {
        console.error('Error adding movie to favorites', error);
        return false;
    }
}

export const removeFavoriteMovie = async (movieId) => {
    try{
        const result = await database.listDocuments(
            DATABASE_ID,
            FAV_COLLECTION_ID,
            [Query.equal('movie_id', movieId)]
        );

        if (result.documents.length > 0) {
            await database.deleteDocument(
                DATABASE_ID,
                FAV_COLLECTION_ID,
                result.documents[0].$id

            );
        }
        return true;
        
    }catch (error) {
        console.error('Error removing movie from favorites:', error);
        return false;
    }
}


export const toggleFavorite = async (movie, isFavorited) => {
    if (isFavorited) {
        return await removeFavoriteMovie(movie.id);
    } else{
        return await addFavoriteMovie(movie);
    }
}

export const getAllFavorites = async () => {
    try{
        const result = await database.listDocuments(
            DATABASE_ID,
            FAV_COLLECTION_ID
        );

        return result.documents;

    } catch(error) {
        console.error('Unable to get all favorite movies', error);
        return [];
    }
}