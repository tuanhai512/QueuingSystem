import React, { FC } from 'react'
import './card.scss'
type Props = {}

const CardUsed:FC = (props: Props) => {
  return (
    <div className='cardUsed'><div className="cardActive_top">
    <img src={require("../../../assets/NumberUsed.png")} />
    <h1> Số thứ tự đã sử dụng</h1>
  </div>
  <div className="cardActive_bottom">
    <h1> 3.721 </h1>
    <div className="cardActive_bottom--number-down">
      <img src={require("../../../assets/arrowdown.png")} />
    <span> 32.41%</span>  
    </div>
  </div></div>
  )
}

export default CardUsed