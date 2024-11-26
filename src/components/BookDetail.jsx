

// import React, { useState, useEffect } from "react";

// // Helper function to get user data from localStorage
// const getUserData = () => {
//   try {
//     const user = JSON.parse(localStorage.getItem("user"));
//     return user ? user : null; // Ensure that null is returned if no user is found
//   } catch (error) {
//     console.error("Error reading user data from localStorage:", error);
//     return null;
//   }
// };

// // Helper function to save borrowed books in localStorage
// const saveBorrowedBooks = (book, userId) => {
//   try {
//     const borrowedBooks = JSON.parse(localStorage.getItem(`borrowed_books_${userId}`)) || [];
//     // Check if the book is already borrowed
//     if (!borrowedBooks.find((b) => b.bookId === book.id)) {
//       const borrowedBook = {
//         bookId: book.id,
//         title: book.title,
//         borrowedDate: new Date().toLocaleDateString(), // Save current date as borrowed date
//       };
//       borrowedBooks.push(borrowedBook);
//       localStorage.setItem(`borrowed_books_${userId}`, JSON.stringify(borrowedBooks));
//     }
//   } catch (error) {
//     console.error("Error saving borrowed book:", error);
//   }
// };

// // Helper function to remove borrowed books from localStorage
// const removeBorrowedBooks = (bookId, userId) => {
//   try {
//     let borrowedBooks = JSON.parse(localStorage.getItem(`borrowed_books_${userId}`)) || [];
//     borrowedBooks = borrowedBooks.filter((book) => book.bookId !== bookId);
//     localStorage.setItem(`borrowed_books_${userId}`, JSON.stringify(borrowedBooks));
//   } catch (error) {
//     console.error("Error removing borrowed book:", error);
//   }
// };

// const BookDetail = ({ book }) => {
//   const [isBorrowed, setIsBorrowed] = useState(false);

//   // Check if the current user has borrowed this book when component mounts
//   useEffect(() => {
//     const user = getUserData();
//     if (user && book) {
//       const borrowedBooks = JSON.parse(localStorage.getItem(`borrowed_books_${user.id}`)) || [];
//       setIsBorrowed(borrowedBooks.some((b) => b.bookId === book.id));
//     }
//   }, [book]);

//   const handleBorrow = () => {
//     const user = getUserData();
//     if (user && book && user.id) {
//       saveBorrowedBooks(book, user.id);
//       setIsBorrowed(true);
//     } else {
//       console.log('User or Book ID is missing!');
//     }
//   };

//   const handleReturn = () => {
//     const user = getUserData();
//     if (user && book && user.id) {
//       removeBorrowedBooks(book.id, user.id);
//       setIsBorrowed(false);
//     } else {
//       console.log('User or Book ID is missing!');
//     }
//   };

//   if (!book) return <p className="text-center">Select a book to see details.</p>;

//   return (
//     <div className="p-6 border rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold">{book.title}</h2>
//       <p className="mt-2"><strong>Author:</strong> {book.author || "Unknown"}</p>
//       <p><strong>Genre:</strong> {book.genre || "Unknown"}</p>
//       <p><strong>Publication Date:</strong> {book.publicationDate}</p>
//       <div className="mt-4 flex space-x-4">
//         {/* Display "Borrow" or "Return" button based on the borrowed status */}
//         {!isBorrowed ? (
//           <button
//             className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
//             onClick={handleBorrow}
//           >
//             Borrow
//           </button>
//         ) : (
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
//             onClick={handleReturn}
//           >
//             Return
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookDetail;




import React, { useState, useEffect } from "react";

// Helper function to get user data from localStorage
const getUserData = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user || null;
  } catch (error) {
    console.error("Error reading user data from localStorage:", error);
    return null;
  }
};

// Helper function to save borrowed books in localStorage
const saveBorrowedBooks = (book, userId) => {
  try {
    const borrowedBooks = JSON.parse(localStorage.getItem(`borrowed_books_${userId}`)) || [];
    if (!borrowedBooks.find((b) => b.bookId === book.id)) {
      borrowedBooks.push({
        bookId: book.id,
        title: book.title,
        borrowedDate: new Date().toLocaleDateString(),
      });
      localStorage.setItem(`borrowed_books_${userId}`, JSON.stringify(borrowedBooks));
    }
  } catch (error) {
    console.error("Error saving borrowed book:", error);
  }
};

// Helper function to remove borrowed books from localStorage
const removeBorrowedBooks = (bookId, userId) => {
  try {
    const borrowedBooks = JSON.parse(localStorage.getItem(`borrowed_books_${userId}`)) || [];
    localStorage.setItem(
      `borrowed_books_${userId}`,
      JSON.stringify(borrowedBooks.filter((book) => book.bookId !== bookId))
    );
  } catch (error) {
    console.error("Error removing borrowed book:", error);
  }
};

const BookDetail = ({ book }) => {
  const [isBorrowed, setIsBorrowed] = useState(false);

  useEffect(() => {
    const user = getUserData();
    if (user && book) {
      const borrowedBooks = JSON.parse(localStorage.getItem(`borrowed_books_${user.id}`)) || [];
      setIsBorrowed(borrowedBooks.some((b) => b.bookId === book.id));
    }
  }, [book]);

  const handleBorrow = () => {
    const user = getUserData();
    if (user && book?.id) {
      saveBorrowedBooks(book, user.id);
      setIsBorrowed(true);
    } else {
      console.log("User or Book ID is missing!");
    }
  };

  const handleReturn = () => {
    const user = getUserData();
    if (user && book?.id) {
      removeBorrowedBooks(book.id, user.id);
      setIsBorrowed(false);
    } else {
      console.log("User or Book ID is missing!");
    }
  };

  if (!book)
    return <p className="text-center text-gray-600 italic">Select a book to see details.</p>;

  return (
    <div className="p-6 border rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">{book.title}</h2>
      <p className="mt-2 text-gray-800 dark:text-gray-200">
        <strong>Author:</strong> {book.author || "Unknown"}
      </p>
      <p className="text-gray-800 dark:text-gray-200">
        <strong>Genre:</strong> {book.genre || "Unknown"}
      </p>
      <p className="text-gray-800 dark:text-gray-200">
        <strong>Publication Date:</strong> {book.publicationDate || "Not Available"}
      </p>
      <div className="mt-6 flex space-x-4">
        {!isBorrowed ? (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 transition-colors"
            onClick={handleBorrow}
          >
            Borrow
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-colors"
            onClick={handleReturn}
          >
            Return
          </button>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
