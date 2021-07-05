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

  const deleteHandler = (id) => {
    //e.target.
    fetch(`http://localhost:5000/api/passwords/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.json();
      console.log(res);
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
            <button
              onClick={() => deleteHandler(props.id)}
              className="revealBtn delete"
            >
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
