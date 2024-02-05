import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addBooksfun } from "../redux/books/action";

export const AddBook = ({ handleAddBook }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [book, setBook] = useState({
    title: "",
    description: "",
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddBook(book);
    onClose();

    setBook({ title: "", description: "", price: 0 });
  };

  return (
    <Box display={"flex"} justifyContent={"left"} mt={10}>
      <Button display={"inline"} onClick={onOpen} colorScheme="blue">
        + Add Book
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent mt={"auto"} mb={"auto"} p={5}>
          <ModalHeader>Create your New Book</ModalHeader>
          <ModalCloseButton />
          <form action="" onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl
                isRequired
                display={"flex"}
                flexDirection={"column"}
                gap={3}
              >
                <FormLabel>Book Title</FormLabel>
                <Input
                  ref={initialRef}
                  type="text"
                  placeholder="title"
                  name="title"
                  value={book.title}
                  onChange={handleChange}
                />

                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  placeholder="description"
                  name="description"
                  value={book.description}
                  onChange={handleChange}
                />
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  // placeholder="price"
                  name="price"
                  value={book.price}
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Add Book
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};
