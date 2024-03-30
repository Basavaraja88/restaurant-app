import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home";
import Orders from "./orders";
import Crud from "./crud";
import Login from "./login";
import Navbar from "./components/layout/navbar";
import { AuthProvider } from "./components/Auth";
import Layout from "./components/layout/header-footer";
import { useAuth } from "./components/Auth";
import Private from "./components/private";

function App() {
  const { user } = useAuth;
  console.log("basav", user);
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route path="/orders" element={<Orders />} />
          <Route path="/crud" element={<Crud />} />

          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
