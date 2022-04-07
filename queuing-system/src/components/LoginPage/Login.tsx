import React, { FC } from "react";
import { Col, Row} from "antd";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";
import './login.scss'

export const Login: FC = () => {
  return (
    <div className="login">
      <div className="LoginLeft"><LoginLeft/></div>
      <div className="LoginRight"><LoginRight/></div>
    </div>
  );
};


