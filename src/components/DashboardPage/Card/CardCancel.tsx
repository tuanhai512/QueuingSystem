import React, { FC } from 'react'
import './card.scss'
type Props = {}

const CardCancel:FC = (props: Props) => {
  return (
    <div className='cardCancel'><div className="cardActive_top">
    <img src={require("../../../assets/NumberCancel.png")} />
    <h1> Số thứ tự đã bỏ qua</h1>
  </div>
  <div className="cardActive_bottom">
    <h1> 32 </h1>
    <div className="cardActive_bottom--number-up">
      <img src={require("../../../assets/arrowup.png")} />
    <span> 22.41%</span>  
    </div>
  </div></div>
  )
}

export default CardCancel