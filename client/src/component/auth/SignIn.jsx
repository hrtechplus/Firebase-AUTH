import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="sign-in-container">
      <from>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </from>
    </div>
  );
}
