/* eslint-disable react-hooks/set-state-in-effect */
import "./Books.css";

import {
  useEffect,
  useState,
  useContext
} from "react";

import API from "../services/api";

import {
  AuthContext
} from "../context/AuthContext";

function Payments(){

  const [payments,setPayments] =
    useState([]);

  const { token } =
    useContext(AuthContext);


  // Get Payments
  const getPayments = async () => {

    try{

      const res = await API.get(

        "/payments/history",

        {
          headers:{
            authorization:token
          }
        }

      );

      setPayments(res.data);

    }
    catch(error){

      console.log(error);

    }
  };


  // Pay Now
  const payNow = async (id) => {

    try{

      await API.patch(

        `/payments/${id}/pay`,

        {},

        {
          headers:{
            authorization:token
          }
        }

      );

      alert("Payment Successful");

      getPayments();

    }
    catch(error){

      console.log(error);

    }
  };


  useEffect(()=>{

    getPayments();

  },[]);


  return(

    <div className="books">

      <h1>Payments</h1>

      <div className="booksGrid">

        {
          payments.map((item)=>(

            <div
              className="bookCard"
              key={item._id}
            >

              <h2>
                Payment
              </h2>

              <p>
                Status :
                {item.paymentStatus}
              </p>

              <h3>
                Amount :
                ₹{item.amount}
              </h3>

              {
                item.paymentStatus === "Pending"
                ?
                (
                  <button
                    onClick={()=>
                      payNow(item._id)
                    }
                  >
                    Pay Now
                  </button>
                )
                :
                (
                  <button disabled>
                    Paid
                  </button>
                )
              }

            </div>

          ))
        }

      </div>

    </div>

  );
}

export default Payments;