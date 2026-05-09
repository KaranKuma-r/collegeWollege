import "./Dashboard.css";

import {
  useEffect,
  useState,
  useContext
} from "react";

import API from "../services/api";

import {
  AuthContext
} from "../context/AuthContext";

function Dashboard(){

  const [data,setData] = useState({});

  const { token } =
    useContext(AuthContext);


  useEffect(()=>{

    const getDashboard = async () => {

      try{

        const res = await API.get(

          "/dashboard/summary",

          {
            headers:{
              authorization:token
            }
          }

        );

        setData(res.data);

      }
      catch(error){

        console.log(error);

      }
    };

    if(token){

      getDashboard();

    }

  },[token]);


  return(

    <div className="dashboard">

      <h1>Dashboard</h1>

      <div className="dashboardCards">

        <div className="card">

          <h2>
            {data.activeBorrows || 0}
          </h2>

          <p>
            Active Borrows
          </p>

        </div>


        <div className="card">

          <h2>
            {data.historyCount || 0}
          </h2>

          <p>
            History Count
          </p>

        </div>


        <div className="card">

          <h2>
            ₹{data.totalAmount || 0}
          </h2>

          <p>
            Total Amount
          </p>

        </div>


        <div className="card">

          <h2>
            ₹{data.balance || 0}
          </h2>

          <p>
            Pending Balance
          </p>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;