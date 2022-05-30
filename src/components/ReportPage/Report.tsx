import React, { FC, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Col, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { TableReport } from "./TableReport";
import DateRange from "../ServicePage/DateTimePicker";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SvgNotification from "../../assets/iconComponent/notification";

type Props = {};

export const Report: FC = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const notify = [
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
  ];
  return (
    <>
      <SideBar />
      <div className="facility">
        <div className="facility_title">
          <span className="facility_title-L">
            Báo cáo <img src={require("../../assets/arrowTitle.png")} alt="" />{" "}
          </span>
          <span className="facility_title-R"> Lập báo cáo</span>
          <span>
            <span
              className="iconNotificationR"
              onClick={() => setOpen((open) => !open)}
            >
              <SvgNotification />
            </span>
            <div className={open ? "openN" : "closedN"}>
              <div className="openN_titleN">
                {" "}
                <h1>Thông báo </h1>
              </div>

              {notify.map((item, index) => {
                return (
                  <Col className="openN_contentN" key={index} span={24}>
                    <p className="openN_contentN--topN">
                      Người dùng:{item.name}
                    </p>
                    <p className="openN_contentN--bottomN">
                      Thời gian nhận số: {item.time}
                    </p>
                  </Col>
                );
              })}
            </div>
            <Link to="/account-user">
              <div className="facility_title-T">
                <AccountUserLeft />
              </div>
            </Link>{" "}
          </span>
        </div>
        <div className="facility_top">
          <div className="facility_top--title"></div>
          <div className="facility_top--groupBtn">
            <div className="facility_top--groupBtn-timeR">
              <div className="facility_top--groupBtn-timeN_title">
                Chọn thời gian
              </div>
              {/* <DateRange /> */}
            </div>
          </div>
          <div className="facility_top--table">
            <TableReport />
          </div>
        </div>
        <div className="facility_top--addBtn">
          <div className="facility_iconEdit">
            <img src={require(`../../assets/document.png`)} alt="" />
          </div>
          <a>Tải về</a>
        </div>
      </div>
    </>
  );
};
