/* eslint-disable react-hooks/set-state-in-effect */
import "./Books.css";

import { useEffect,useState,useContext } from "react";

import API from "../services/api";

import { AuthContext } from "../context/AuthContext";

function ActiveBorrow(){

  const [borrows,setBorrows] = useState([]);

  const { token } = useContext(AuthContext);

  const getBorrows = async () => {

    try{

      const res = await API.get(
        "/borrow/active",
        {
          headers:{
            authorization:token
          }
        }
      );

      setBorrows(res.data);

    }
    catch(error){

      console.log(error);
    }
  };

  const returnBook = async (id) => {

    try{

      await API.post(
        `/borrow/${id}/submit`,
        {},
        {
          headers:{
            authorization:token
          }
        }
      );

      alert("Book Returned");

      getBorrows();

    }
    catch(error){

      console.log(error);
    }
  };

  useEffect(()=>{

    getBorrows();

  },[]);

  return(
    <div className="books">

      <h1>Active Borrow</h1>

      <div className="booksGrid">

        {
          borrows.map((item)=>(

            <div
              className="bookCard"
              key={item._id}
            >

              <h2>
                {item.book.title}
              </h2>

              <p>
                Status : {item.status}
              </p>

              <p>
                Due Date :
                {
                  item.dueDate.slice(0,10)
                }
              </p>

              <h3>
                ₹{item.totalCost}
              </h3>

              <button
                onClick={()=>returnBook(item._id)}
              >
                Return Book
              </button>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default ActiveBorrow;