
// // import React, { useState, useEffect } from "react";
// // import Filters from "../components/Filters";
// // import BookList from "../components/BookList";
// // import BookDetail from "../components/BookDetail";
// // import { fetchBooksByTitle } from "../utils/fetchBooks";

// // const Home = () => {
// //   const [books, setBooks] = useState([]);
// //   const [selectedBook, setSelectedBook] = useState(null);

// //   useEffect(() => {
// //     const fetchBooks = async () => {
// //       // Fetch books from the URL
// //       const fetchedBooks = await fetchBooksByTitle("");

// //       // Get books from localStorage
// //       const localBooks = JSON.parse(localStorage.getItem("books")) || [];

// //       // Combine both fetched and locally stored books
// //       setBooks([...fetchedBooks, ...localBooks]);
// //     };

// //     fetchBooks();
// //   }, []);

// //   const handleSearch = async (title) => {
// //     // Fetch books based on the search term
// //     const fetchedBooks = await fetchBooksByTitle(title);

// //     // Get books from localStorage
// //     const localBooks = JSON.parse(localStorage.getItem("books")) || [];

// //     // Combine both fetched and locally stored books
// //     const filteredBooks = [
// //       ...fetchedBooks,
// //       ...localBooks.filter((book) =>
// //         book.title.toLowerCase().includes(title.toLowerCase())
// //       ),
// //     ];
// //     setBooks(filteredBooks);
// //   };

// //   return (
// //     <div className="max-w-5xl mx-auto p-4">
// //       <h1 className="text-4xl font-bold text-center mb-8">E-Library Management</h1>
// //       <Filters onFilter={handleSearch} />
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         <div className="col-span-2">
// //           <BookList books={books} onViewDetails={setSelectedBook} />
// //         </div>
// //         <div>
// //           <BookDetail
// //             book={selectedBook}
// //             onBorrow={() => alert("Borrowed!")}
// //             onReturn={() => alert("Returned!")}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;



// import React, { useState, useEffect } from "react";
// import Filters from "../components/Filters";
// import BookList from "../components/BookList";
// import BookDetail from "../components/BookDetail";
// import { fetchBooksByTitle } from "../utils/fetchBooks";
// import { RotatingLines } from "react-loader-spinner"; // Import the spinner

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     const fetchBooks = async () => {
//       setLoading(true); // Start loading
//       try {
//         // Fetch books from the URL
//         const fetchedBooks = await fetchBooksByTitle("");

//         // Get books from localStorage
//         const localBooks = JSON.parse(localStorage.getItem("books")) || [];

//         // Combine both fetched and locally stored books
//         setBooks([...fetchedBooks, ...localBooks]);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchBooks();
//   }, []);

//   const handleSearch = async (title) => {
//     setLoading(true); // Start loading
//     try {
//       // Fetch books based on the search term
//       const fetchedBooks = await fetchBooksByTitle(title);

//       // Get books from localStorage
//       const localBooks = JSON.parse(localStorage.getItem("books")) || [];

//       // Combine both fetched and locally stored books
//       const filteredBooks = [
//         ...fetchedBooks,
//         ...localBooks.filter((book) =>
//           book.title.toLowerCase().includes(title.toLowerCase())
//         ),
//       ];
//       setBooks(filteredBooks);
//     } catch (error) {
//       console.error("Error searching books:", error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       <h1 className="text-4xl font-bold text-center mb-8">E-Library Management</h1>
//       <Filters onFilter={handleSearch} />
//       {loading ? (
//         // Show the loader while loading
//         <div className="flex justify-center items-center mt-10">
//           <RotatingLines
//             strokeColor="blue"
//             strokeWidth="5"
//             animationDuration="0.75"
//             width="50"
//             visible={true}
//           />
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="col-span-2">
//             <BookList books={books} onViewDetails={setSelectedBook} />
//           </div>
//           <div>
//             <BookDetail
//               book={selectedBook}
//               onBorrow={() => alert("Borrowed!")}
//               onReturn={() => alert("Returned!")}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;




import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";
import BookList from "../components/BookList";
import BookDetail from "../components/BookDetail";
import { fetchBooksByTitle } from "../utils/fetchBooks";
import { RotatingLines } from "react-loader-spinner"; // Import the spinner

const Home = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true); // Start loading
      try {
        // Fetch books from the URL
        const fetchedBooks = await fetchBooksByTitle("");

        // Get books from localStorage
        const localBooks = JSON.parse(localStorage.getItem("books")) || [];

        // Combine both fetched and locally stored books
        setBooks([...fetchedBooks, ...localBooks]);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = async (title) => {
    setLoading(true); // Start loading
    try {
      // Fetch books based on the search term
      const fetchedBooks = await fetchBooksByTitle(title);

      // Get books from localStorage
      const localBooks = JSON.parse(localStorage.getItem("books")) || [];

      // Combine both fetched and locally stored books
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
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">E-Library Management</h1>
      <Filters onFilter={handleSearch} />
      {loading ? (
        // Show the loader while loading
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
