import React, { Component } from "react";
import "./Passwords.css";
import PasswordItem from "./PasswordItem";
import NewPassword from "./NewPassword";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";

class Passwords extends Component {
  constructor() {
    super();
    this.state = {
      passwords: []
    }
  }

  componentDidMount() {
    fetch('/api/passwords')
    .then(res => res.json())
    .then(passwords => this.setState({passwords}, () => console.log('Passwords fetched...', passwords)))
  }

  // console.log(props);
  render() {return (
    <div className="pwComponentWhole">
      {/* <button onClick={fetchPasswords}>FETCH</button> */}
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
        title='asdf'
        username='asdf'
        password='asdf'
      />
      <PasswordItem
        title='asdf'
        username='asdf'
        password='asdf'
      />
      <PasswordItem
        title='asdf'
        username='asdf'
        password='asdf'
      />
      <NewPassword />
    </div>
  );}
};

export default withAuthenticationRequired(Passwords, {
  onRedirecting: () => <Loading />,
});
