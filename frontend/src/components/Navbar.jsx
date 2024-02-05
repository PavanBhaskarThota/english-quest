import { Box, Button, Heading, useToast } from "@chakra-ui/react";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "./Logout";
import { resetAuth } from "../redux/auth/action";

export const Navbar = () => {
  // const { isAuth } = useSelector((store) => store.authReducer, shallowEqual);
  const navigate = useNavigate();
  const toast = useToast();
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(resetAuth);
    localStorage.clear();
    navigate("/");

    {
      toast({
        title: "Logout Successfull",
        // description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
      height={"100px"}
      gap={2}
    >
      <Heading
        size={{ base: "xm", md: "xl" }}
        ml={{ base: 2, md: 20 }}
        cursor={"pointer"}
      >
        <Link to={"/"}> English Quest</Link>
      </Heading>
      <Link to={"/books"} style={{ fontSize: "16px", fontWeight: "600" }}>
        Books Library
      </Link>

      {user ? (
        // <Button mr={20} bg={"red"} color={"white"} onClick={handleLogout}>
        //   Logout
        // </Button>
        <Logout handleLogout={handleLogout} props={user} />
      ) : (
        <Box
          display={"flex"}
          gap={{ base: 2, md: 10 }}
          mr={{ base: 2, md: 20 }}
        >
          <Link to={"/login"}>
            <Button colorScheme="blue" borderRadius={"20px"}>
              Login
            </Button>
          </Link>
          <Link to={"/register"}>
            <Button colorScheme="teal" borderRadius={"20px"}>
              SignUp
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};
