import React from "react";
import { Col, Row} from "antd";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";
import './login.scss'

const Login = () => {
  return (
    <div className="login">
      <div className="LoginLeft"><LoginLeft/></div>
      <div className="LoginRight"><LoginRight/></div>
    </div>
  );
};

export default Login;
