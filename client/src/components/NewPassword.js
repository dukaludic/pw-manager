import "./Passwords.css";
import "./NewPassword.css";
import { useState } from "react/cjs/react.development";

const NewPassword = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const clickHandler = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      title: enteredTitle,
      username: enteredUsername,
      password: enteredPassword,
    };
    console.log(loginData);

    setEnteredTitle("");
    setEnteredUsername("");
    setEnteredPassword("");
  };

  return (
    <div>
      {!isOpen && (
        <button onClick={clickHandler} className="addLoginBtn">
          Add Login
        </button>
      )}

      {isOpen && (
        <div>
          <form onSubmit={submitHandler} className="addForm">
            <input
              value={enteredTitle}
              onChange={titleChangeHandler}
              className="input"
              type="text"
              placeholder="Title"
            ></input>
            <input
              value={enteredUsername}
              onChange={usernameChangeHandler}
              className="input"
              type="text"
              placeholder="Username"
            ></input>
            <input
              value={enteredPassword}
              onChange={passwordChangeHandler}
              className="input"
              type="text"
              placeholder="Password"
            ></input>
            <button className="addBtn">Add</button>
            <button onClick={clickHandler} className="addBtn">
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewPassword;
