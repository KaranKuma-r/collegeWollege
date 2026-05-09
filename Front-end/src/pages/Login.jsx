import "./Login.css";

import { useState,useContext } from "react";

import API from "../services/api";

import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

function Login(){

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try{

      const res = await API.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      login(res.data.token);

      alert("Login Successful");

      navigate("/dashboard");

    }
    catch(error){

      alert(error.response.data.message);
    }
  };

  return(
    <div className="login">

      <form
        className="loginForm"
        onSubmit={handleLogin}
      >

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button>
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;