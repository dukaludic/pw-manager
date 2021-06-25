import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="menuItem menuBtn"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <i class="fas fa-sign-out-alt"></i>
      <p>Log Out</p>
    </button>
  );
};

export default LogoutButton;
