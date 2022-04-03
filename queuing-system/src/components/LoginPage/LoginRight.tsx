import React from "react";
import login from "../../assets/login.png";
import styles from "./login.scss";

function LoginRight() {
  return (
    <div className="loginRight">
      <div className="imageLoginR">
        <img src={login} />
      </div>
      <div className="contentR">
        <h2>Hệ thống</h2>
        <h1>QUẢN LÝ XẾP HÀNG</h1>
      </div>
    </div>
  );
}

export default LoginRight;
