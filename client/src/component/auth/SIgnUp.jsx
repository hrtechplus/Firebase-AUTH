import React, { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

// firebase auth files

import { auth, provider } from "../../firebase";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  reload,
  signOut,
} from "firebase/auth";
import UserDetails from "./UserDetails";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const accessToken = sessionStorage.getItem("accessToken");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const signOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    // Code to handle accessToken changes
  }, [accessToken]);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // my Google sign in code

  const [value, setValues] = useState("");
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setValues(user);
        accessToken = sessionStorage.setItem("accessToken", user.accessToken);

        toast.success("User created successfully");
      })
      .catch((error) => {
        console.log(error);
      });
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
      </form>
      {/* sign with google button */}
      <button type="submit" onClick={handleGoogle}>
        Sign Up With google
      </button>

      {accessToken ? (
        <UserDetails
          displayName={value.displayName}
          email={value.email}
          profilePhoto={value.photoURL}
          click={signOut}
        />
      ) : null}
    </div>
  );
}
