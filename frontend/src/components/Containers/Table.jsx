import React from "react";
import Category from "../TableComponents/Category";

const Table = ({ data }) => {
  return Object.entries(data).map(([category, subCategories]) => {
    return (
      <Category
        key={category}
        className="has-margin-bottom-lg has-border-bottom-md"
        name={category}
        subCategories={subCategories}
      />
    );
  });
};

export default Table;
