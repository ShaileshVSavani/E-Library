
// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom"; // Import useNavigate to redirect
// import { auth } from "../firebase/firebase";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       // Redirect to home page after successful login
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
//       >
//         <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">
//           Login to E-Library
//         </h2>

//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
//         >
//           Login
//         </button>

//         {/* Signup Prompt below the Login Button */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-700">
//             New to E-Library?{" "}
//             <span className="font-semibold text-blue-600 hover:text-blue-700">
//               Don’t have an account yet?{" "}
//               <button
//                 onClick={() => navigate("/signup")}
//                 className="underline"
//               >
//                 Create your account now!
//               </button>
//             </span>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure this is imported

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/"); // Redirect after success
      }, 1500);
    } catch (err) {
      setError(err.message);
      toast.error("Login failed! Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-teal-600">
          Login to E-Library
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
        >
          Login
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-700">
            New to E-Library?{" "}
            <span className="font-semibold text-teal-500 hover:text-teal-600">
              Don’t have an account yet?{" "}
              <button onClick={() => navigate("/signup")} className="underline">
                Create your account now!
              </button>
            </span>
          </p>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;
