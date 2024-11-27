
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { auth } from "../firebase/firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="bg-teal-600 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-lg font-bold tracking-wider">
              E-Library
            </Link>
          </div>

        
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300"
            >
              <svg
                className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          
          <div
            className={`w-full flex-grow md:flex md:items-center md:justify-end ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 px-4 py-2"
            >
              Home
            </Link>
            <Link
              to="/mybooks"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 px-4 py-2"
            >
              My Books
            </Link>
            <Link
              to="/addbook"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 px-4 py-2"
            >
              Add Book
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 px-4 py-2"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 px-4 py-2"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 px-4 py-2"
                >
                  Signup
                </Link>
              </>
            )}
            <Link
              to="/about"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 px-4 py-2"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
