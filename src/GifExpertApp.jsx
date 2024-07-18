import { useState } from "react";

export const GifExpertApp = () => {
  //no poner condicionalmente los hooks
  const [categories, setCategories] = useState(["mr. robot", "rick and morty"]);

  const handleAdd = (value) => {
    setCategories([...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      <hr />
      {/* Input para la categoria */}
      <input type="text" />
      <button onClick={handleAdd}>Agregar</button>
      {/* Listado de categorias */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
