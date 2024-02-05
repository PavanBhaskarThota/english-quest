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

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, status, isLoading, isError, isSignup } = useSelector(
    (store) => store.authReducer,
    shallowEqual
  );

  if (isSignup) {
    navigate("/login");
  }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(userRegisterfun(user));
  };
  console.log(userData, status, isLoading, isError);

  return (
    <Box
      w={"50%"}
      m={"auto"}
      mt={10}
      p={10}
      borderRadius={"20px"}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    >
      <form action="" onSubmit={handleSubmit}>
        <FormControl
          isRequired
          w={"70%"}
          m={"auto"}
          p={"5%"}
          borderRadius={"20px"}
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          border={"0.5px solid lightgrey"}
          mb={5}
        >
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Full Name"
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
                Viewer
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

      <Text fontSize={"lg"}>
        Already have an Account?{" "}
        <Link to={"/login"} style={{ color: "blue", fontWeight: "700" }}>
          Login
        </Link>
      </Text>
    </Box>
  );
};
