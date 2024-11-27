
import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";
import BookList from "../components/BookList";
import BookDetail from "../components/BookDetail";
import { fetchBooksByTitle } from "../utils/fetchBooks";
import { RotatingLines } from "react-loader-spinner"; 

const Home = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true); 
      try {
       
        const fetchedBooks = await fetchBooksByTitle("");

        
        const localBooks = JSON.parse(localStorage.getItem("books")) || [];

       
        setBooks([...fetchedBooks, ...localBooks]);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = async (title) => {
    setLoading(true); 
    try {
      
      const fetchedBooks = await fetchBooksByTitle(title);

     
      const localBooks = JSON.parse(localStorage.getItem("books")) || [];

    
      const filteredBooks = [
        ...fetchedBooks,
        ...localBooks.filter((book) =>
          book.title.toLowerCase().includes(title.toLowerCase())
        ),
      ];
      setBooks(filteredBooks);
    } catch (error) {
      console.error("Error searching books:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
       <h1 className=" p-3 text-5xl font-semibold text-center bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent mb-8">
    E-Library Management
  </h1>
      <Filters onFilter={handleSearch} />
      {loading ? (
       
        <div className="flex justify-center items-center mt-10">
          <RotatingLines
            strokeColor="green"
            strokeWidth="5"
            animationDuration="0.75"
            width="50"
            visible={true}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <BookList books={books} onViewDetails={setSelectedBook} />
          </div>
          <div>
            <BookDetail
              book={selectedBook}
              onBorrow={() => alert("Borrowed!")}
              onReturn={() => alert("Returned!")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
