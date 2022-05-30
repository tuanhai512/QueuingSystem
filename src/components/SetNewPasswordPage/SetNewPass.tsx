import React, { FC } from "react";
import './newpassword.scss'
import SetNewPassLeft from "./SetNewPassLeft";
import SetNewPassRight from "./SetNewPassRight";


const SetNewPass: FC = () => {
  return (
    <div className="newPassword">
      <div className="newPassLeft"><SetNewPassLeft/></div>
      <div className="newPassRight"><SetNewPassRight/></div>
    </div>
  );
};

export default SetNewPass;
