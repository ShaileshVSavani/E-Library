

import React, { useState, useEffect } from "react";


const getUserData = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user || null;
  } catch (error) {
    console.error("Error reading user data from localStorage:", error);
    return null;
  }
};


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
