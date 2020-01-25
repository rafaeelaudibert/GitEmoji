import React from "react";
import { Title, Column } from "rbx";
import Emoji from "./Emoji";

const SubCategory = ({ name, emojis }) => {
  return (
    <>
      <Title size={6}>{name}</Title>

      <Column.Group multiline breakpoint="mobile" gapSize={3}>
        {emojis.map(data => (
          <Emoji key={data[0].emojiId} data={data} />
        ))}
      </Column.Group>
    </>
  );
};

export default SubCategory;
