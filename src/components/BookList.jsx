import React from "react";

const BookList = ({ books, onViewDetails }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="p-4 border rounded-lg shadow-md hover:shadow-lg"
          onClick={() => onViewDetails(book)}
        >
          <h3 className="font-bold text-lg">{book.title}</h3>
          <p className="text-gray-600">By {book.author || "Unknown"}</p>
          <p className="text-sm text-gray-500">Genre: {book.genre}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
