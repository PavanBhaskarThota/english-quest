import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRegisterfun } from "../redux/auth/action";
import { Loading } from "./Loading";

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, status, isLoading, isError, isSignup } = useSelector(
    (store) => store.authReducer,
    shallowEqual
  );

  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  if (isLoading) {
    return <Loading page={"70vh"} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userRegisterfun(user))
      .then((res) => {
        const status = res.data.msg;
        if (status == "new user has add") {
          navigate("/login");
        }
      })
      .catch((err) => {
        // const status = err.data.name;
      });
  };

  return (
    <Box
      w={{ base: "95%", md: "50%" }}
      m={"auto"}
      mt={10}
      p={{ base: 3, md: 10 }}
      borderRadius={"20px"}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    >
      <form action="" onSubmit={handleSubmit}>
        <FormControl
          isRequired
          w={{ base: "100%", md: "70%" }}
          m={"auto"}
          p={{ base: "3%", md: "5%" }}
          borderRadius={"20px"}
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          border={"0.5px solid lightgrey"}
          mb={5}
        >
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="full name"
            type="name"
            value={user.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="email"
            type="email"
            value={user.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="password"
            type="password"
            value={user.password}
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>Role</FormLabel>
          <RadioGroup>
            <HStack spacing="24px">
              <Radio
                value="viewer"
                name="role"
                onChange={(e) => handleChange(e)}
              >
                User
              </Radio>
              <Radio
                value="creater"
                name="role"
                onChange={(e) => handleChange(e)}
              >
                Creater
              </Radio>
            </HStack>
          </RadioGroup>
          <Button
            backgroundColor={"#036cff"}
            color={"white"}
            height={"50px"}
            borderRadius={"25px"}
            w={"50%"}
            display={"block"}
            m={"auto"}
            mt={10}
            type="submit"
          >
            Register
          </Button>
        </FormControl>
      </form>

      <Text fontSize={{ base: "xs", md: "lg" }}>
        Already have an Account?{" "}
        <Link to={"/login"} style={{ color: "blue", fontWeight: "700" }}>
          Login
        </Link>
      </Text>
    </Box>
  );
};
