import React from "react";

export default function UserDetails(props) {
  const { displayName, email, profilePhoto, click } = props;

  return (
    <div>
      <h2>User Details</h2>
      <img src={profilePhoto} alt="Profile Photo" />
      <p>Display Name: {displayName}</p>
      <p>Email: {email}</p>
      <button onClick={click}>Sign Out</button>
    </div>
  );
}
