import "./MainNav.css";
import { NavLink } from "react-router-dom";
import AuthenticationButton from "./authentication-button";
import SignupButton from "./signup-button";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="menuContainer">
      <h1 className="logo">SafeLog</h1>
      <NavLink to="/" className="menuItem">
        <i className="fas fa-user"></i>
        <p>Home</p>
      </NavLink>
      <NavLink to="/Passwords" className="menuItem">
        <i className="fas fa-key"></i>
        <p>Passwords</p>
      </NavLink>
      <hr className="hr"></hr>
      <AuthenticationButton />
      {!isAuthenticated && <SignupButton />}

      {/* <div className="menuItem">
        <i class="fas fa-sign-out-alt"></i>
        <p>Logout</p>
      </div> */}
    </div>
  );
};

export default MainNav;
