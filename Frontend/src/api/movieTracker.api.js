import axios from "axios";

const movieTrackerApi = axios.create({
  baseURL: "http://127.0.0.1:8000/peliculas/api/peliculas/",
});

export const getAllMovies = () => movieTrackerApi.get("/");

export const getMovie = (id) => movieTrackerApi.get(`/${id}/`);

export const createMovie = (movie) => {
  const formData = new FormData();

  formData.append("titulo", movie.titulo);
  formData.append("director", movie.director);
  formData.append("anio_lanzamineto", movie.anio_lanzamineto);
  formData.append("genero", movie.genero);
  formData.append("duracion", movie.duracion);
  formData.append("sinopsis", movie.sinopsis);
  formData.append("usuario", movie.usuario);

  // Agregar el archivo de la película
  if (movie.poster && movie.poster.length > 0) {
    formData.append("poster", movie.poster[0]); // Accede al primer archivo seleccionado
  }

  return movieTrackerApi.post("/", formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Indica que el contenido es multipart/form-data
    },
  });
};

export const deleteMovie = (id) => movieTrackerApi.delete(`/${id}`);

export const updateMovie = (id, movie) => {
  const formData = new FormData();

  formData.append("titulo", movie.titulo);
  formData.append("director", movie.director);
  formData.append("anio_lanzamineto", movie.anio_lanzamineto);
  formData.append("genero", movie.genero);
  formData.append("duracion", movie.duracion);
  formData.append("sinopsis", movie.sinopsis);
  formData.append("usuario", movie.usuario);

  // Agregar el archivo de la película si es que se actualiza
  if (movie.poster && movie.poster.length > 0) {
    formData.append("poster", movie.poster[0]); // Accede al primer archivo seleccionado
  }

  return movieTrackerApi.put(`/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Indica que el contenido es multipart/form-data
    },
  });
};
