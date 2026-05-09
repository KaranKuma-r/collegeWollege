import "./Navbar.css";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  useContext
} from "react";

import {
  AuthContext
} from "../context/AuthContext";

function Navbar(){

  const {
    token,
    logout
  } = useContext(AuthContext);

  const navigate = useNavigate();


  const handleLogout = () => {

    logout();

    navigate("/login");

  };


  return(

    <div className="navbar">

      <h2>
        Smart Library
      </h2>

      <div className="navLinks">

        <Link to="/">
          Home
        </Link>


        {
          token && (

            <>

              <Link to="/dashboard">
                Dashboard
              </Link>

              <Link to="/books">
                Books
              </Link>

              <Link to="/active">
                Active
              </Link>

              <Link to="/history">
                History
              </Link>

              <Link to="/payments">
                Payments
              </Link>

              <Link to="/profile">
                Profile
              </Link>

            </>

          )
        }


        {
          token ? (

            <button
              className="logoutBtn"
              onClick={handleLogout}
            >
              Logout
            </button>

          ) : (

            <>

              <Link to="/login">
                Login
              </Link>

              <Link to="/signup">
                Signup
              </Link>

            </>

          )
        }

      </div>

    </div>

  );
}

export default Navbar;