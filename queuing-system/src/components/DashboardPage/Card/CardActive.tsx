import React, { FC } from "react";
import "./card.scss";
type Props = {};

const CardActive: FC = (props: Props) => {
  return (
    <div className="cardActive">
      <div className="cardActive_top">
        <img src={require("../../../assets/NumberActive.png")} />
        <h1> Số thứ tự đã cấp</h1>
      </div>
      <div className="cardActive_bottom">
        <h1> 4.221 </h1>
        <div className="cardActive_bottom--number-up">
          <img src={require("../../../assets/arrowup.png")} />
        <span> 32.41%</span>  
        </div>
      </div>
    </div>
  );
};

export default CardActive;
