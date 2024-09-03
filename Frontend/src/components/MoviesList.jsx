import { useEffect } from "react"; 
import { getAllMovies } from '../api/movieTracker.api'

export function MovieList() {
    useEffect(() => {
        async function loadMovies() {
            const res = await getAllMovies();
            console.log(res);
        }
        loadMovies();
    }, []);

    return <div>Movies List</div>;
}