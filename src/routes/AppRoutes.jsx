

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import Home from "../pages/Home";
// import PrivateRoute from "./PrivateRoute"; // Import PrivateRoute

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />

//       {/* Private Routes */}
//       <Route
//         path="/"
//         element={
//           <PrivateRoute>
//             <Home />
//           </PrivateRoute>
//         }
//       />
//     </Routes>
//   );
// };

// export default AppRoutes;




import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import About from "../pages/About"; // Import About page
import PrivateRoute from "./PrivateRoute"; // Import PrivateRoute
import MyBook from "../pages/MyBook";
import AddUpdateBook from "../pages/AddUpdateBook";

const AppRoutes = () => {

  const [books, setBooks] = useState(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    return storedBooks; // Initialize from localStorage or as an empty array
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Private Routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/mybooks"
        element={
          <PrivateRoute>
            <MyBook />
          </PrivateRoute>
        }
      />
       <Route
        path="/addbook"
        element={
          <PrivateRoute>
            <AddUpdateBook books={books} setBooks={setBooks}/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
