import React, { useState } from "react";
import "./Passwords.css";
import PasswordItem from "./PasswordItem";
import NewPassword from "./NewPassword";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

const Passwords = (props) => {
  console.log(props);
  return (
    <div className="pwComponentWhole">
      <h1 className="pwTitle">Passwords</h1>
      <div className="pwContainer">
        <div className="pwHeadingsContainer">
          <p>Title</p>
          <p>Username</p>
          <p>Password</p>
          <p>Actions</p>
        </div>
        <hr></hr>
      </div>
      <PasswordItem
        title={props.items[0].title}
        username={props.items[0].username}
        password={props.items[0].password}
      />
      <PasswordItem
        title={props.items[1].title}
        username={props.items[1].username}
        password={props.items[1].password}
      />
      <PasswordItem
        title={props.items[2].title}
        username={props.items[2].username}
        password={props.items[2].password}
      />
      <NewPassword />
    </div>
  );
};

export default withAuthenticationRequired(Passwords, {
  onRedirecting: () => <Loading />,
});
