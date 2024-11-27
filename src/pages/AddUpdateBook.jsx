
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddUpdateBook = ({ books = [], setBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { bookId } = useParams();

  useEffect(() => {
    if (bookId) {
      const book = books.find((b) => b.id === parseInt(bookId, 10));
      if (book) {
        setTitle(book.title);
        setAuthor(book.author);
        setGenre(book.genre || ""); 
        setPublicationDate(book.publicationDate || ""); 
        setDescription(book.description);
        setIsEdit(true);
      } else {
        navigate("/"); 
      }
    }
  }, [bookId, books, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = { title, author, genre, publicationDate, description };

    if (isEdit) {
      
      const updatedBooks = books.map((book) =>
        book.id === parseInt(bookId, 10) ? { ...book, ...newBook } : book
      );
      setBooks(updatedBooks);
      localStorage.setItem("books", JSON.stringify(updatedBooks));
    } else {
      
      const newBookWithId = { ...newBook, id: Date.now() };
      const updatedBooks = [...books, newBookWithId];
      setBooks(updatedBooks);
      localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    navigate("/"); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        {isEdit ? "Edit Book" : "Add New Book"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Author:
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Genre:
          </label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            placeholder="e.g., Fiction, Non-Fiction, Mystery"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Publication Date:
          </label>
          <input
            type="date"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
          >
            {isEdit ? "Save Changes" : "Add Book"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUpdateBook;
