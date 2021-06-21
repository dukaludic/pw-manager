import React, { useState } from "react";

const NewPassword = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPw, setEnteredPw] = useState("");

  const clickHandler = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const pwChangeHandler = (e) => {
    setEnteredPw(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      title: enteredTitle,
      password: enteredPw,
    };

    props.onAddLoginData(loginData);
    setEnteredPw("");
    setEnteredTitle("");
  };

  return (
    <div className="newPasswordContainer">
      {!isOpen && (
        <button className="addBtn" onClick={clickHandler}>
          ADD
        </button>
      )}
      {isOpen && (
        <div>
          <div className="pwItemContainer">
            <form onSubmit={submitHandler}>
              <div>
                <div>
                  <label>Title</label>
                  <input
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    type="text"
                    value={enteredPw}
                    onChange={pwChangeHandler}
                  />
                </div>
              </div>
              <div>
                <button>Add</button>
              </div>
            </form>
            {isOpen && (
              <button className="addBtn" onClick={clickHandler}>
                CLOSE
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPassword;
