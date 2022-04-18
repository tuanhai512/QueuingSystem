import React, { FC, useState } from "react";
import { SideBarItem } from "./SideBarItem";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RiChatHistoryLine } from "react-icons/ri";
import { SideBarData } from "./SideBarData";
import { MdFollowTheSigns } from "react-icons/md";

type SideBarLinkProp = {
  item: SideBarItem;
};

const SidebarLink: FC<SideBarLinkProp> = ({ item }) => {
 

  return (
    <>
      <NavLink to={item.path} className="link" exact >
        <div className= "submenu">
          <div className="icon"> {item.icon} </div>
          <div className="title">
            <a> {item.title}</a>
          </div>
          <div className="iconSubNav">
            {item?.subnav ? item.iconOpened : item.iconClosed}
          </div>

          {item?.subnav !== undefined ? (
            <div className="groupNav">
              {item?.subnav?.map((item, index) => {
                return (
                  <div className="groupNav subNav">
                    <NavLink to={item.path} key={index} className="linkSub">
                      <div className="groupNav subNav titleSubNav">
                        <h2> {item.title} </h2>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
      </NavLink>
    </>
  );
};

export default SidebarLink;
