import React from "react";
import forgot from "../../assets/forgotpassword.jpg";
import styles from "./newpassword.scss";

function SetNewPassRight() {
  return (
    <div className="newPassRight">
      <div className="imageNewPassR">
        <img src={forgot} />
      </div>
    </div>
  );
}

export default SetNewPassRight;
