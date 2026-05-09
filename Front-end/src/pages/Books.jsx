import "./Books.css";

import { useEffect,useState,useContext } from "react";

import API from "../services/api";

import { AuthContext } from "../context/AuthContext";

function Books(){

  const [books,setBooks] = useState([]);

  const { token } = useContext(AuthContext);

  const borrowBook = async (id) => {

    try{

      await API.post(
        "/borrow",
        {
          bookId:id,
          days:5
        },
        {
          headers:{
            authorization:token
          }
        }
      );

      alert("Book Borrowed");

      const updatedBooks = await API.get("/books");
      setBooks(updatedBooks.data);

    }
    catch(error){

      alert(error.response.data.message);
    }
  };

  useEffect(()=>{

    const fetchBooks = async () => {

      try{

        const res = await API.get("/books");

        setBooks(res.data);

      }
      catch(error){

        console.log(error);
      }

    };

    fetchBooks();

  },[]);

  return(
    <div className="books">

      <h1>Books</h1>

      <div className="booksGrid">

        {
          books.map((item)=>(

            <div
              className="bookCard"
              key={item._id}
            >

              <h2>{item.title}</h2>

              <p>
                Author : {item.author}
              </p>

              <h3>
                ₹{item.pricePerDay} / Day
              </h3>

              <p>
                Status :
                {
                  item.isAvailable
                  ?
                  " Available"
                  :
                  " Borrowed"
                }
              </p>

              <button
                disabled={!item.isAvailable}
                onClick={()=>borrowBook(item._id)}
              >
                {
                  item.isAvailable
                  ?
                  "Borrow Book"
                  :
                  "Unavailable"
                }
              </button>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Books;