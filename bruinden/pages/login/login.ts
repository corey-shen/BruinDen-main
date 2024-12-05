// // pages/auth/signin.tsx
// import { signIn } from "next-auth/react";
// import { FcGoogle } from "react-icons/fc";
// import { useState } from "react";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailLogin = async () => {
//     const result = await signIn("credentials", {
//       redirect: false, // Handle errors without redirect
//       email,
//       password,
//     });

//     if (result?.error) {
//       console.error("Login failed:", result.error);
//     } else {
//       console.log("Login successful:", result);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Sign In</h2>
//       <button
//         onClick={() => signIn("google")}
//         className="google-login-button"
//       >
//         <FcGoogle snize={24} />
//         Sign In with Google
//       </button>

//       <div className="email-login">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <button onClick={handleEmailLogin}>Sign In with Email</button>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
