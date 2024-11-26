
// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom"; // Import useNavigate to redirect
// import { auth } from "../firebase/firebase";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Hook to navigate programmatically

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user; // Firebase user object

//       // Save user data (including user.id) in localStorage
//       localStorage.setItem("user", JSON.stringify({
//         id: user.uid, // Firebase assigns a unique UID to each user
//         email: user.email,
//       }));

//       // Redirect to home page after successful signup
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <form
//         onSubmit={handleSignup}
//         className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
//       >
//         <h2 className="text-3xl font-semibold text-center mb-6 text-blue-600">
//           Create Your Account
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
//           Signup
//         </button>

//         {/* Login Prompt below the Signup Button */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-700">
//             Already have an account?{" "}
//             <span className="font-semibold text-blue-600 hover:text-blue-700">
//               <button
//                 onClick={() => navigate("/login")}
//                 className="underline"
//               >
//                 Login here!
//               </button>
//             </span>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;




import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { toast, ToastContainer } from "react-toastify"; // Import React Toastify

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Firebase user object

      // Save user data (including user.id) in localStorage
      localStorage.setItem("user", JSON.stringify({
        id: user.uid, // Firebase assigns a unique UID to each user
        email: user.email,
      }));

      // Notify user and redirect after successful signup
      toast.success("Signup successful! Redirecting...");
      setTimeout(() => {
        navigate("/"); 
      }, 1500);
    } catch (err) {
      setError(err.message);
      toast.error("Signup failed! Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-teal-600">
          Create Your Account
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
          Signup
        </button>

        {/* Login Prompt below the Signup Button */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Already have an account?{" "}
            <span className="font-semibold text-teal-500 hover:text-teal-600">
              <button
                onClick={() => navigate("/login")}
                className="underline"
              >
                Login here!
              </button>
            </span>
          </p>
        </div>
      </form>

      {/* ToastContainer for React Toastify */}
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

export default Signup;
