import React, { FC } from 'react'
import {FiLogOut} from 'react-icons/fi';
import logoAlta from "../../assets/Logoalta.png";
import { SideBarData } from './SideBarData';
import SidebarLink from './SidebarLink';
import "./sidebar.scss"
import { Button } from 'antd';


const SideBar: FC = ({}) => {
  return (
    <div className='sidebar'>
        <div className="logoAlta">
        <img src={logoAlta} />
      </div>
      {SideBarData.map((item,index)=>{
        return <SidebarLink item={item} key={index} />

      })}
      <Button className='btnLogout' icon={<FiLogOut/>}>Đăng xuất</Button>
    </div>
  )
}

export default SideBar