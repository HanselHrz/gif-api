import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {
  //no poner condicionalmente los hooks
  const [categories, setCategories] = useState(["mr. robot", "rick and morty"]);

  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return;
    setCategories([onNewCategory, ...categories]);
    // setCategories([...categories, value]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
