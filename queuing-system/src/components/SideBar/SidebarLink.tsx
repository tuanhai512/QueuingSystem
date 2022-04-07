import React, { FC, useState } from "react";
import { SideBarItem } from "./SideBarItem";
import { Link } from "react-router-dom";
import { RiChatHistoryLine } from "react-icons/ri";

type SideBarLinkProp = {
  item: SideBarItem;
};

const SidebarLink: FC<SideBarLinkProp> = ({ item }) => {
  const [subNav, setSubNav] = useState<Boolean>(false);
  const showSubNav = () => setSubNav(!subNav);

  return (
    <>
      <Link to={item.path} >
        <div className="submenu">
          <div className="icon"> {item.icon} </div>
          <div className="title">
            <a> {item.title}</a>
          </div>
          <div className="iconSubNav">
            {item?.subnav ? item.iconOpened : item.iconClosed}
          </div>
          <div className="groupNav">
          {
            item?.subnav?.map((item, index) => {
              return (
                <div className="groupNav subNav">
                  <Link to={item.path} key={index}>
                    <div className="groupNav subNav title">
           
                      <h2> {item.title} </h2>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
        </div>

      </Link>

    
       
      
    </>
  );
};

export default SidebarLink;
