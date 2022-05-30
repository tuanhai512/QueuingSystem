import React, { FC } from "react";
import { Col, Row} from "antd";

import './forgot.scss'
import ForgotLeft from './ForgotLeft';
import ForgotRight from './ForgotRight';

const ForgotPassword: FC= () => {
  return (
    <div className="forgot">
      <div className="forgotLeft"><ForgotLeft/></div>
      <div className="forgotRight"><ForgotRight/></div>
    </div>
  );
};

export default ForgotPassword;
