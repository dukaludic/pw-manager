import React, { Component } from "react";
import UniqueID from "react-html-id";
import "./NewPassword.css";

class NewPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      title: "",
      username: "",
      password: "",
      isOpen: false,
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // delete this.state.isOpen;
    // console.log(this.state);
    console.log("pre fetch");
    fetch("http://localhost:5000/api/passwords", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.id,
        title: this.state.title,
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => {
        console.log("post succesfull", res);
        return this.props.loadPasswords();
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ title: "" });
    this.setState({ username: "" });
    this.setState({ password: "" });

    this.state.id = this.state.id + 1;

    this.clickHandler();
  };

  clickHandler = () => {
    this.state.isOpen === false
      ? this.setState({ isOpen: true })
      : this.setState({ isOpen: false });
  };

  render() {
    const { id, title, username, password } = this.state;
    return (
      <div>
        {!this.state.isOpen && (
          <button onClick={this.clickHandler} className="addBtn">
            Add
          </button>
        )}
        {this.state.isOpen && (
          <form className="addForm" onSubmit={this.submitHandler}>
            <input
              className="input"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.changeHandler}
            />

            <input
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.changeHandler}
            />

            <input
              className="input"
              type="text"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.changeHandler}
            />
            <div className="actions">
              <button className="addBtn" type="submit">
                Submit
              </button>
              <button onClick={this.clickHandler} className="addBtn">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default NewPassword;
