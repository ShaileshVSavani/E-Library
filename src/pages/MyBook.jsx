

import React, { useState, useEffect } from "react";

// Helper function to get user data from localStorage
const getUserData = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user : null;
};

const MyBook = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  // Fetch borrowed books on mount
  useEffect(() => {
    const user = getUserData();
    if (user) {
      const books = JSON.parse(localStorage.getItem(`borrowed_books_${user.id}`)) || [];
      setBorrowedBooks(books);
    }
  }, []);

  const handleReturnBook = (bookId) => {
    const user = getUserData();
    if (user) {
      // Remove the book from localStorage and update state
      let borrowedBooks = JSON.parse(localStorage.getItem(`borrowed_books_${user.id}`)) || [];
      borrowedBooks = borrowedBooks.filter((book) => book.bookId !== bookId);
      localStorage.setItem(`borrowed_books_${user.id}`, JSON.stringify(borrowedBooks));
      setBorrowedBooks(borrowedBooks); // Update the component state
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Your Borrowed Books</h2>

      {borrowedBooks.length === 0 ? (
        <p className="text-center text-gray-500">You have not borrowed any books yet.</p>
      ) : (
        <ul className="space-y-4">
          {borrowedBooks.map((book) => (
            <li key={book.bookId} className="flex items-center justify-between p-4 bg-white border rounded-lg shadow">
              <div>
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-500">Borrowed on: {book.borrowedDate}</p>
              </div>
              <button
                onClick={() => handleReturnBook(book.bookId)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Return
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBook;
