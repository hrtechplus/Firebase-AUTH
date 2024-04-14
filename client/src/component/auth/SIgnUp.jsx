import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

import { UserAuth } from "../../context/AuthContext";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //signUpGoogle

  // my vcoded
  const handleGoogleSignIn = async () => {
    const { googleSignIn } = UserAuth();
    try {
      await googleSignIn();
    } catch (error) {
      toast.error("Sign in failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign Up");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("User created successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button type="submit">Sign Up</button>
        <button type="submit" onClick={handleGoogleSignIn}>
          Sign Up With google
        </button>
      </form>
    </div>
  );
}
