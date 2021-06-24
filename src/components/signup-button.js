import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="menuItem menuBtn"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      <i class="fas fa-user-plus"></i>
      <p>Sign Up</p>
    </button>
  );
};

export default SignupButton;
