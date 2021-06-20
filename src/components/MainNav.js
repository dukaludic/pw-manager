import "./MainNav.css";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <header className="header">
      <h1 className="title" to="/">
        PW-MANAGER
      </h1>
      <div>
        <NavLink activeClassName="active" className="listEl" to="/password">
          Passwords
        </NavLink>
        <NavLink className="listEl" to="/profile">
          Profile
        </NavLink>
      </div>
    </header>
  );
};

export default MainNav;
