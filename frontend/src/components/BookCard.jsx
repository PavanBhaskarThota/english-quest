import { Button, Td, Tr, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";

export const BookCard = ({ props, index, handleDelete }) => {
  const book = props;

  const deleteButton = () => {
    let id = props._id;
    handleDelete(id);
  };

  return (
    <Tr>
      <Td>{index + 1}</Td>
      <Td>{book.title}</Td>
      <Td>{book.description}</Td>
      <Td>{book.price}</Td>
      <Td>
        <Button
          disabled={true}
          style={{ border: "1px solid red", background: "white" }}
          onClick={deleteButton}
        >
          Delete
        </Button>
      </Td>
    </Tr>
  );
};
