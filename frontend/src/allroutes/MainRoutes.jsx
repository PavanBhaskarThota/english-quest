import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import { Books } from "../pages/Books";
import { Home } from "../pages/Home";
import { PrivateRoutes } from "../pages/PrivateRoutes";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route
        path="/books"
        element={
          <PrivateRoutes>
            <Books />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
