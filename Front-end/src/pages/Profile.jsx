import {
  useEffect,
  useState,
  useContext
} from "react";

import API from "../services/api";

import {
  AuthContext
} from "../context/AuthContext";

function Profile(){

  const [user,setUser] =
    useState({});

  const { token } =
    useContext(AuthContext);

  useEffect(()=>{

    const getProfile = async () => {

      try{

        const res = await API.get(

          "/auth/profile",

          {
            headers:{
              authorization:token
            }
          }

        );

        setUser(res.data);

      }
      catch(error){

        console.log(error);

      }
    };

    if(token){

      getProfile();

    }

  },[token]);

  return(

    <div
      style={{
        padding:"40px"
      }}
    >

      <h1>Profile</h1>

      <br />

      <h2>
        Name : {user.name}
      </h2>

      <br />

      <h2>
        Email : {user.email}
      </h2>

    </div>

  );
}

export default Profile;