import React from 'react'
import SvgNotification from '../../assets/iconComponent/notification'
import "./AccountUser.scss";
import ava from "../../assets/avatar.png";
type Props = {}

const AccountUserLeft = (props: Props) => {
  return (
    <div className="user content top topR">
    <div className="user content top topR ava">
      <SvgNotification />
      <img width={45} height={45} src={ava} alt=""/>
      <div className="user content top topR username">
        <h3>Xin chào</h3>
        <h1>Lê Quỳnh Ái Vân</h1>
      </div>
    </div>
  </div>
  )
}

export default AccountUserLeft