/* eslint-disable react-hooks/set-state-in-effect */
import "./Books.css";

import { useEffect,useState,useContext } from "react";

import API from "../services/api";

import { AuthContext } from "../context/AuthContext";

function BorrowHistory(){

  const [history,setHistory] = useState([]);

  const { token } = useContext(AuthContext);

  const getHistory = async () => {

    try{

      const res = await API.get(
        "/borrow/history",
        {
          headers:{
            authorization:token
          }
        }
      );

      setHistory(res.data);

    }
    catch(error){

      console.log(error);
    }
  };

  useEffect(()=>{

    getHistory();

  },[]);

  return(
    <div className="books">

      <h1>Borrow History</h1>

      <div className="booksGrid">

        {
          history.map((item)=>(

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
                Borrow Date :
                {
                  item.borrowDate.slice(0,10)
                }
              </p>

              <p>
                Return Date :
                {
                  item.returnDate
                  ?
                  item.returnDate.slice(0,10)
                  :
                  "Not Returned"
                }
              </p>

              <h3>
                ₹{item.totalCost}
              </h3>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default BorrowHistory;