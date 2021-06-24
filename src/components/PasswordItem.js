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

  return (
    <div>
      <div className="pwContainer">
        <div className="pwHeadingsRegular">
          <p>{props.title}</p>
          <p>{props.username}</p>
          <p>{shownPassword}</p>
          <button onClick={revealHide} className="revealBtn">
            {revealBtnTxt}
          </button>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default PasswordItem;
