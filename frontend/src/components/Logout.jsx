import {
  Box,
  Button,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Logout = ({ props, handleLogout }) => {
  return (
    <Box mr={"150px"}>
      <Popover>
        <PopoverTrigger>
          <Heading colorScheme="blue" size={"lg"} cursor={"pointer"}>
            Hi, {props.name}
          </Heading>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader fontWeight={"700"}>Profile</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Text mt={5} fontWeight={"500"}>
                Name: {props.name}
              </Text>
              <Text mt={5} fontWeight={"500"}>
                Email: {props.email}
              </Text>
              <Button mt={5} colorScheme="red" onClick={handleLogout}>
                Logout
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Box>
  );
};
