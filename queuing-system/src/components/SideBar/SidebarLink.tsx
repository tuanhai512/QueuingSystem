import React, { FC } from "react";
import { SideBarItem } from "./SideBarItem";
import { Link } from 'react-router-dom';

type SideBarLinkProp = {
  item: SideBarItem;
};


const SidebarLink: FC<SideBarLinkProp> = ({ item }) => {
  return (
    <>
      <Link to={item.path}>
        <div className="submenu">
      <div className="icon"> {item.icon} </div>   
      <div className="title">  <a> {item.title}</a>  </div> 
        </div>
      </Link>
    </>
  );
};

export default SidebarLink;
