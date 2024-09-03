import axios from "axios";

export const getAllMovies = () => {
    return axios.get('http://127.0.0.1:8000/peliculas/api/peliculas/')
}