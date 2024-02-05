import {
  Box,
  Button,
  Heading,
  Icon,
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
import { CgProfile } from "react-icons/cg";

export const Logout = ({ props, handleLogout }) => {
  return (
    <Box mr={{ base: 2, md: "150px" }}>
      <Popover>
        <PopoverTrigger>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Heading
              colorScheme="blue"
              size={{ base: "xm", md: "lg" }}
              cursor={"pointer"}
            >
              Hi, {props.name}
            </Heading>
            <Icon as={CgProfile} />
          </Box>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader fontWeight={"700"}>Profile</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Box display={"flex"} alignItems={"center"}>
                <Text mt={5} fontWeight={"500"}>
                  Name: {props.name}
                </Text>
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text mt={5} fontWeight={"500"}>
                  Email: {props.email}
                </Text>
              </Box>

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
