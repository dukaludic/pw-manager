import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className="menuItem menuBtn" onClick={() => loginWithRedirect()}>
      <i className="fas fa-sign-in-alt"></i>
      <p>Log In</p>
    </button>
  );
};

export default LoginButton;
