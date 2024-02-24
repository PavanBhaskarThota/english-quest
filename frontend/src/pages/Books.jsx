import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addBooksfun, deleteBookfun, getBooksfun } from "../redux/books/action";
import { AddBook } from "../components/AddBook";
import {
  Box,
  Divider,
  HStack,
  Heading,
  Radio,
  RadioGroup,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { BookCard } from "../components/BookCard";
import { Loading } from "../components/Loading";

export const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector(
    (store) => store.bookReducer,
    shallowEqual
  );
  const [addBtn, setAddbtn] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [addBook, setAddbook] = useState(false);
  const [deleteBook, setDeleteBook] = useState(false);
  const toast = useToast();

  const [sortbyTime, setSortByTime] = useState("");

  //sort
  const [sortPrice, setPrice] = useState(Infinity);
  const [sort, setPriceSort] = useState("");

  let userInfo;

  const handleAddBook = (book) => {
    setAddbook(true);
    dispatch(addBooksfun(book)).then((res) => {
      let status = res.data.status;

      console.log(status);
      if (status == "Book Added") {
        {
          toast({
            title: "New Book Added",
            description: "Book added successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
      }
    });
  };

  const handleDelete = (id) => {
    setDeleteBook(true);
    dispatch(deleteBookfun(id)).then((res) => {
      let status = res.status;
      console.log(status, res);
      if (status == "Book Deleted") {
        {
          toast({
            title: "Delete Successfull",
            description: "Book is Deleted",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        }
      }
    });
  };

  let bookList = [...books];

  const handleChange = (book) => {
    console.log(book);
    bookList = [...book];
  };

  bookList = bookList
    .filter((el) => {
      if (el.price < sortPrice || !sortPrice) {
        return el;
      }
    })
    .sort((a, b) => {
      if (sort == "low") {
        return a.price - b.price;
      } else if (sort == "high") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

  useEffect(() => {
    dispatch(getBooksfun(sortbyTime, 1)).then((res) => {
      handleChange(res);
    });
    setAddbook(false);
    setDeleteBook(false);

    const userDetails = sessionStorage.getItem("user");
    userInfo = JSON.parse(userDetails);
    if (userDetails) {
      setUser(userInfo);
      if (userInfo.role == "creater") {
        setAddbtn(true);
      } else {
        setShow(true);
      }
    }
  }, [addBook, deleteBook, sortbyTime]);

  return (
    <Box m={"auto"} mt={10} w={{ base: "95%", md: "90%" }}>
      {addBtn && (
        <Heading size={"lg"} textAlign={"left"}>
          Hi, {user.name.toUpperCase()}
        </Heading>
      )}

      {show && (
        <Heading size={"lg"} textAlign={"left"}>
          Hi, {user.name.toUpperCase()}
        </Heading>
      )}

      {addBtn && <AddBook handleAddBook={handleAddBook} />}

      <Heading size={"lg"} mt={10}>
        Books in Table Format
      </Heading>

      <Box
        w={"100%"}
        m={"auto"}
        mt={10}
        p={10}
        borderRadius={"20px"}
        border={"0.5px solid"}
      >
        <Box
          mb={5}
          display={"flex"}
          gap={{ base: 5, md: 10 }}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Select
            placeholder="Filter with Price"
            bg={"#fff"}
            w={{ base: "45%", md: "20%" }}
            h={"52px"}
            value={sortPrice}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value={500}> Less the 500</option>
            <option value={1000}> Less the 1000</option>
            <option value={5000}> Less the 5000</option>
          </Select>

          <Select
            placeholder="sort with Price"
            bg={"#fff"}
            w={{ base: "45%", md: "20%" }}
            h={"52px"}
            onChange={(e) => setPriceSort(e.target.value)}
          >
            <option value="low"> Low to High</option>
            <option value="high"> High to Low</option>
          </Select>

          <RadioGroup>
            <HStack spacing="24px">
              <Radio
                value="new"
                name="sortbyTime"
                onChange={(e) => setSortByTime(e.target.value)}
              >
                Last 10 Minutes
              </Radio>
              <Radio
                value="old"
                name="sortbyTime"
                onChange={(e) => setSortByTime(e.target.value)}
              >
                Before 10 Minutes
              </Radio>
              <Radio
                value="all"
                name="sortbyTime"
                onChange={(e) => setSortByTime(e.target.value)}
              >
                All Books
              </Radio>
            </HStack>
          </RadioGroup>
        </Box>
        <Divider />

        {isLoading ? (
          <Loading />
        ) : (
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Total Books - {bookList.length}</TableCaption>
              <Thead>
                <Tr>
                  <Th>N0.</Th>
                  <Th>Title</Th>
                  <Th>Description</Th>
                  <Th>Price</Th>
                  <Th>Created By</Th>
                  <Th>Created At</Th>
                </Tr>
              </Thead>
              <Tbody>
                {bookList.length > 0 &&
                  bookList.map((el, i) => {
                    if (user._id === el.userId) {
                      return (
                        <BookCard
                          key={i}
                          props={el}
                          deleteBtn={addBtn}
                          index={i}
                          handleDelete={handleDelete}
                        />
                      );
                    } else {
                      return (
                        <BookCard
                          key={i}
                          props={el}
                          deleteBtn={addBtn}
                          index={i}
                          handleDelete={handleDelete}
                        />
                      );
                    }
                  })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
};
