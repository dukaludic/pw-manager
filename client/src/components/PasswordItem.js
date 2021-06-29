import "./Passwords.css";
import "./PasswordItem.css";
import React, { useState } from "react";

const PasswordItem = (props) => {
  const [revealBtnTxt, setRevealBtnTxt] = useState("Reveal");
  const [shownPassword, setShownPassword] = useState("••••••••••");

  const revealHide = () => {
    shownPassword === "••••••••••"
      ? setShownPassword(props.password)
      : setShownPassword("••••••••••");

    revealBtnTxt === "Reveal"
      ? setRevealBtnTxt("Hide")
      : setRevealBtnTxt("Reveal");
  };

  const deleteHandler = (e) => {
    fetch("http://localhost:5000/api/passwords/2", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  // console.log(props.loadPasswords());

  return (
    <div>
      <div className="pwContainer">
        <div className="pwHeadingsRegular">
          <p>{props.title}</p>
          <p>{props.username}</p>
          <p>{shownPassword}</p>
          <div>
            <button onClick={revealHide} className="revealBtn">
              {revealBtnTxt}
            </button>
            <button onClick={deleteHandler} className="revealBtn delete">
              Delete
            </button>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default PasswordItem;
