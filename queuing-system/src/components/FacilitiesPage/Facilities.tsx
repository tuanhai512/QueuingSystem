import React, { FC } from "react";
import SideBar from "../SideBar/SideBar";
import { Select } from 'antd';
import { Option } from "antd/lib/mentions";
import './facilities.scss'
import { Input } from 'antd';
import { AiFillPlusSquare } from "react-icons/ai";
import { TableFacillity } from "./TableFacillity";
import { Link } from "react-router-dom";


export const Facilities: FC = () => {
 
 
  return (
    <>
      <SideBar />
      <div className="facility">
        <div className="facility_title">
          <span className="facility_title-L">Thiết bị <img src={require("../../assets/arrowTitle.png")} alt="" /> </span> 
          <span className="facility_title-R"> Danh sách thiết bị</span>
        </div>
        <div className="facility_top">
          <div className="facility_top--title">
            <h1> Danh sách thiết bị</h1>
          </div>
          <div className="facility_top--groupBtn">
            <div className="facility_top--groupBtn-active">
              <div className="facility_top--groupBtn-active_title">Trạng thái hoạt động</div>
            <Select
                suffixIcon={<img src={require("../../assets/arrow.png")}/>}
                  labelInValue
                  defaultValue={{ value: "all" }}
                  style={{ width: 400 , height: 45 }}
                 >
                  <Option value="all">Tất cả</Option>
                  <Option value="active">Hoạt động</Option>
                  <Option value="inactive">Ngưng hoạt động</Option>
                </Select>
            </div>
         
            <div className="facility_top--groupBtn-connect">
             <div className="facility_top--groupBtn-connect_title">Trạng thái kết nối</div>
            <Select
                suffixIcon={<img src={require("../../assets/arrow.png")}/>}
                  labelInValue
                  defaultValue={{ value: "all" }}
                  style={{ width: 400 , height: 45, marginLeft:"50px"}}
                 >
                  <Option value="all">Tất cả</Option>
                  <Option value="connect">Kết nối</Option>
                  <Option value="disconnect">Mất kết nối</Option>
                </Select>
            </div>
            
            <div className="facility_top--groupBtn-search">
            <div className="facility_top--groupBtn-search_title">Từ khóa</div>
            <Input style={{ width: 400, height: 45, marginLeft: "88%" }} suffix={<img src={require("../../assets/search.png")}/>} />
          </div>
          </div>   
          <div className="facility_top--table">
            <TableFacillity/>
          </div>
        </div>
        <Link to="/add-Facility" className="facility_top--addBtn">
          <AiFillPlusSquare/>
            <a href="/add-Facility">Thêm thiết bị</a> 
            </Link>
      </div>
    </>
  );
};
