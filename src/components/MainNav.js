import "./MainNav.css";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="menuContainer">
      <h1 className="logo">SafeLog</h1>
      <NavLink to="/" className="menuItem">
        <i class="fas fa-user"></i>
        <p>Home</p>
      </NavLink>
      <NavLink to="/Passwords" className="menuItem">
        <i class="fas fa-key"></i>
        <p>Passwords</p>
      </NavLink>
      <hr className="hr"></hr>
      <div className="menuItem">
        <i class="fas fa-sign-out-alt"></i>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default MainNav;
