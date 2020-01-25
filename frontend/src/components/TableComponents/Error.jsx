import React from "react";
import { Message, Title } from "rbx";

const Error = ({ error }) => {
  return (
    <Message color="danger">
      <Message.Body>
        <Title className="is-danger"> Oops! </Title>
        <Title subtitle size={5}>
          There was an error while downloading the data. <br />
          The message error was:
        </Title>
        {error.toString()}
      </Message.Body>
    </Message>
  );
};

export default Error;
