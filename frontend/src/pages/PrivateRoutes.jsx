import { Box, useToast } from "@chakra-ui/react";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const toast = useToast();

  return user ? (
    children
  ) : (
    <>
      <Navigate state={location.pathname} to="/login" replace={true} />
      {toast({
        title: "Please login",
        description: "You need to login to access this page.",
        status: "warning",
        duration: 3000, 
        isClosable: true,
      })}
    </>
  );
};
