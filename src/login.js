import React from "react";
import { useState } from "react";
import { Outlet, json, redirect } from "react-router";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./components/Auth";

function Login() {
  console.log("useAuth", useAuth());
  const { logIn } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const loginFrom = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  // console.log("loginFrom", formData);
  async function submitData(e) {
    e.preventDefault();

    const responce = await fetch(
      "https://synergyv2-as-production.azurewebsites.net/v1/admin/auth/login",
      { method: "POST", body: JSON.stringify(formData) }
    );
    const data = await responce.json();
    console.log("data", data);
    localStorage.setItem("access_tocken", data.data.access_token.token);
    const storege_access_token = localStorage.getItem("access_tocken");
    console.log("storege_access_token", storege_access_token);
    logIn(storege_access_token);
    navigate("/home");
  }

  return (
    <div className=" mx-auto justify-center mt-[200px] bg-slate-400 w-[500px] text-center text-[50px] font-bold">
      Log In
      <form
        onSubmit={submitData}
        className=" mt-[50px] space-y-5 pb-[100px] text-[20px]"
      >
        <div className=" space-x-10  flex">
          {" "}
          <label>User Name:</label>
          <input
            className=" pl-2"
            type="text"
            name="email"
            value={formData.email}
            onChange={loginFrom}
          />
        </div>
        <div className=" space-x-10  flex">
          {" "}
          <label>Password:</label>
          <input
            className=" pl-2"
            onChange={loginFrom}
            type="text"
            name="password"
            value={formData.password}
          />
        </div>
        <button type="submit" className=" bg-pink-100 p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
