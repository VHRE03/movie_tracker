import { useForm } from "react-hook-form";
import { createMovie } from "../api/movieTracker.api";

export function MovieFormPage(params) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await createMovie(data);
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      <label htmlFor="">Titulo</label>
      <input type="text" {...register("titulo", { require: true })} />
      {errors.titulo && <span>This field is required</span>}

      <label htmlFor="">Director</label>
      <input type="text" {...register("director", { require: true })} />

      <label htmlFor="">Año de lanzamineto</label>
      <input type="text" {...register("anio_lanzamineto", { require: true })} />

      <label htmlFor="">Genero</label>
      <input type="text" {...register("genero", { require: true })} />

      <label htmlFor="">Duracion</label>
      <input type="number" {...register("duracion", { require: true })} />

      <label htmlFor="">Sinopsis</label>
      <textarea name="" {...register("sinopsis", { require: true })}></textarea>

      <label htmlFor="">Poster</label>
      <input type="file" {...register("poster", { require: true })} />

      <label htmlFor="">Usuario</label>
      <input type="number" {...register("usuario", { require: true })} />

      <button>Save</button>
    </form>
  );
}
