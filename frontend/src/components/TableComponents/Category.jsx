import React from "react";
import { Title } from "rbx";
import SubCategory from "./SubCategory";

const Category = ({ name, subCategories }) => {
  return (
    <>
      <Title size={4}>{name}</Title>
      {Object.entries(subCategories).map(([name, emojis]) => (
        <SubCategory key={name} name={name} emojis={emojis} />
      ))}
    </>
  );
};

export default Category;
