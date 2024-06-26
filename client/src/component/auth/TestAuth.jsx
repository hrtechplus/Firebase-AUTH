import React from "react";
import {
  auth,
  provider,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "./config";

export default function TestAuth() {
  /// sign OUT ///
  const performSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // Call the performSignOut function
  const signOut = () => {
    alert("Sign out");
    performSignOut();
  };
  ////SIGN OUT  ///
  const handleGoogleSignup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignup}>Sign up with Google</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
