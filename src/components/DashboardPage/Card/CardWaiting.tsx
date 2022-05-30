import React, { FC } from 'react'
import './card.scss'
type Props = {}

const CardWaiting:FC = (props: Props) => {
  return (
    <div className='cardWaiting'><div className="cardActive_top">
    <img src={require("../../../assets/NumberWait.png")} />
    <h1> Số thứ tự đang chờ</h1>
  </div>
  <div className="cardActive_bottom">
    <h1> 468 </h1>
    <div className="cardActive_bottom--number-down">
      <img src={require("../../../assets/arrowdown.png")} />
    <span> 56.41%</span>  
    </div>
  </div></div>
  )
}

export default CardWaiting