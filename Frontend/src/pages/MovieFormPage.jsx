import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  createMovie,
  deleteMovie,
  getMovie,
  updateMovie,
} from "../api/movieTracker.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function MovieFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [posterUrl, setPosterUrl] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateMovie(params.id, data);
      toast.success("Pelicula actualizada");
    } else {
      await createMovie(data);
      toast.success("Pelicula creada");
    }
    navigate("/movies");
  });

  useEffect(() => {
    async function loadMovie() {
      if (params.id) {
        const { data } = await getMovie(params.id);
        setValue("titulo", data.titulo);
        setValue("director", data.director);
        setValue("anio_lanzamineto", data.anio_lanzamineto);
        setValue("genero", data.genero);
        setValue("duracion", data.duracion);
        setValue("sinopsis", data.sinopsis);
        setValue("usuario", data.usuario);
        setPosterUrl(data.poster); // Guardar la URL del poster
      }
    }
    loadMovie();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <label htmlFor="">Titulo</label>
        <input type="text" {...register("titulo", { require: true })} />
        {errors.titulo && <span>This field is required</span>}
        <label htmlFor="">Director</label>
        <input type="text" {...register("director", { require: true })} />
        <label htmlFor="">Año de lanzamineto</label>
        <input
          type="text"
          {...register("anio_lanzamineto", { require: true })}
        />
        <label htmlFor="">Genero</label>
        <input type="text" {...register("genero", { require: true })} />
        <label htmlFor="">Duracion</label>
        <input type="number" {...register("duracion", { require: true })} />
        <label htmlFor="">Sinopsis</label>
        <textarea
          name=""
          {...register("sinopsis", { require: true })}
        ></textarea>
        {/* Mostrar la imagen existente si hay una */}
        {posterUrl && (
          <div>
            <label>Imagen actual:</label>
            <img src={posterUrl} alt="Poster de la película" width="200" />
          </div>
        )}
        <label htmlFor="">Poster</label>
        <input type="file" {...register("poster")} />

        <label htmlFor="">Usuario</label>
        <input type="number" {...register("usuario", { require: true })} />
        <button>Save</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("are you sure?");
            if (accepted) {
              await deleteMovie(params.id);
              toast.success("Pelicula eliminada");
              navigate("/movies");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
