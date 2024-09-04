import { useForm } from "react-hook-form";

export function MovieFormPage(params) {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">Titulo</label>
      <input type="text" {...register("titulo", { require: true })} />

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
