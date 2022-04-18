import React, { FC } from 'react'
import './card.scss'
type Props = {}

const CardWaiting:FC = (props: Props) => {
  return (
    <div className='cardWaiting'>Số thứ tự đang chờ</div>
  )
}

export default CardWaiting