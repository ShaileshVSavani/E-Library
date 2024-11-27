
import React, { useState } from "react";

const Filters = ({ onFilter }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onFilter(search);
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className="mb-6 flex flex-col sm:flex-row items-center gap-4"
    >
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-3 border rounded-lg w-full sm:w-3/4 focus:outline-none focus:ring-2 focus:ring-green-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
      />
      <button
        type="submit"
        className="w-full sm:w-1/4 p-3 bg-green-400 text-white rounded-lg hover:bg-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none transition-all duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default Filters;
