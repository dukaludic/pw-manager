import "./PasswordItem.css";
import "./NewPassword.css";
import React, { useState } from "react";

const PasswordItem = (props) => {
  const [shownPassword, setShownPassword] = useState("••••••••••");
  const [revealBtnTxt, setRevealBtnTxt] = useState("Reveal");
  const password = "123hello";
  const [isOpen, setIsOpen] = useState(false);
  // let revealBtnTxt = "Reveal";

  const revealHide = () => {
    shownPassword === "••••••••••"
      ? setShownPassword(password)
      : setShownPassword("••••••••••");

    revealBtnTxt === "Reveal"
      ? setRevealBtnTxt("Hide")
      : setRevealBtnTxt("Reveal");
  };

  const dropdown = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="pwItemContainer">
      <div className="pwItemUpper">
        <h1>{props.title}</h1>
        <button className="toggleBtn" onClick={dropdown}>
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
      {isOpen && (
        <div>
          <div>Password</div>
          <div className="pwContainer">{shownPassword}</div>
          <button className="pwButton" onClick={revealHide}>
            {revealBtnTxt}
          </button>
        </div>
      )}
    </div>
  );
};

export default PasswordItem;
