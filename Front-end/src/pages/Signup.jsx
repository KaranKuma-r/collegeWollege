import "./Signup.css";

import { useState } from "react";

import API from "../services/api";

import { useNavigate } from "react-router-dom";

function Signup(){

  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {

    e.preventDefault();

    try{

      await API.post(
        "/auth/signup",
        {
          name,
          email,
          password
        }
      );

      alert("Signup Successful");

      navigate("/login");

    }
    catch(error){

      alert(error.response.data.message);
    }
  };

  return(
    <div className="signup">

      <form
        className="signupForm"
        onSubmit={handleSignup}
      >

        <h1>Signup</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

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
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;