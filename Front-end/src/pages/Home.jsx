import "./Home.css";

import { Link } from "react-router-dom";

function Home(){

  return(
    <div className="home">

      <div className="hero">

        <h1>Smart Library Borrowing System</h1>

        <p>
          Borrow books easily, manage active borrows,
          track payment history and monitor your dashboard.
        </p>

        <div className="heroButtons">

          <Link to="/signup">
            <button>
              Get Started
            </button>
          </Link>

          <Link to="/books">
            <button className="outlineBtn">
              Explore Books
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;