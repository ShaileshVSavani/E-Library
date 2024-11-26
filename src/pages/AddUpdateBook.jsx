// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const AddUpdateBook = ({ books = [], setBooks }) => {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [genre, setGenre] = useState(""); // New Genre state
//   const [publicationDate, setPublicationDate] = useState(""); // New Publication Date state
//   const [description, setDescription] = useState("");
//   const [isEdit, setIsEdit] = useState(false);
//   const navigate = useNavigate();
//   const { bookId } = useParams();

//   useEffect(() => {
//     if (bookId) {
//       const book = books.find((b) => b.id === parseInt(bookId, 10));
//       if (book) {
//         setTitle(book.title);
//         setAuthor(book.author);
//         setGenre(book.genre || ""); // Set Genre if it exists
//         setPublicationDate(book.publicationDate || ""); // Set Publication Date if it exists
//         setDescription(book.description);
//         setIsEdit(true);
//       } else {
//         navigate("/"); // Redirect to home if the book doesn't exist
//       }
//     }
//   }, [bookId, books, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newBook = { title, author, genre, publicationDate, description };

//     if (isEdit) {
//       // Update existing book
//       const updatedBooks = books.map((book) =>
//         book.id === parseInt(bookId, 10) ? { ...book, ...newBook } : book
//       );
//       setBooks(updatedBooks);
//       localStorage.setItem("books", JSON.stringify(updatedBooks));
//     } else {
//       // Add new book
//       const newBookWithId = { ...newBook, id: Date.now() };
//       const updatedBooks = [...books, newBookWithId];
//       setBooks(updatedBooks);
//       localStorage.setItem("books", JSON.stringify(updatedBooks));
//     }

//     navigate("/"); // Navigate back to the home page
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       <h1 className="text-4xl font-bold text-center mb-8">
//         {isEdit ? "Edit Book" : "Add New Book"}
//       </h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="mb-4">
//           <label className="block">Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block">Author:</label>
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block">Genre:</label>
//           <input
//             type="text"
//             value={genre}
//             onChange={(e) => setGenre(e.target.value)}
//             className="w-full p-2 border rounded-md"
//             placeholder="e.g., Fiction, Non-Fiction, Mystery"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block">Publication Date:</label>
//           <input
//             type="date"
//             value={publicationDate}
//             onChange={(e) => setPublicationDate(e.target.value)}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block">Description:</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           >
//             {isEdit ? "Save Changes" : "Add Book"}
//           </button>
//           <button
//             type="button"
//             onClick={() => navigate("/")}
//             className="px-4 py-2 bg-gray-500 text-white rounded-md"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddUpdateBook;



import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddUpdateBook = ({ books = [], setBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState(""); // New Genre state
  const [publicationDate, setPublicationDate] = useState(""); // New Publication Date state
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
        setGenre(book.genre || ""); // Set Genre if it exists
        setPublicationDate(book.publicationDate || ""); // Set Publication Date if it exists
        setDescription(book.description);
        setIsEdit(true);
      } else {
        navigate("/"); // Redirect to home if the book doesn't exist
      }
    }
  }, [bookId, books, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = { title, author, genre, publicationDate, description };

    if (isEdit) {
      // Update existing book
      const updatedBooks = books.map((book) =>
        book.id === parseInt(bookId, 10) ? { ...book, ...newBook } : book
      );
      setBooks(updatedBooks);
      localStorage.setItem("books", JSON.stringify(updatedBooks));
    } else {
      // Add new book
      const newBookWithId = { ...newBook, id: Date.now() };
      const updatedBooks = [...books, newBookWithId];
      setBooks(updatedBooks);
      localStorage.setItem("books", JSON.stringify(updatedBooks));
    }

    navigate("/"); // Navigate back to the home page
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        {isEdit ? "Edit Book" : "Add New Book"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
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

        {/* Author */}
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

        {/* Genre */}
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

        {/* Publication Date */}
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

        {/* Description */}
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

        {/* Buttons */}
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
