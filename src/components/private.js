import React from "react";
import { useAuth } from "./Auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function Private({ children }) {
  const { user } = useAuth;
  console.log("hello", user);
  // user == "undefined" ? console.log("hi") : <Navigate to={"/"} />;
  return <div>{children}</div>;
}

export default Private;
