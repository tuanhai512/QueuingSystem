import { Card, Col, Row, Select } from "antd";
import React, { FC, useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SideBar from "../SideBar/SideBar";
import "./dashboard.scss";
import "react-calendar/dist/Calendar.css";
import { RadialBar } from "@ant-design/plots";
import { CardModal } from "./CardModel/CardModel";
import SvgMonitor from "./../../assets/iconComponent/monitor";
import { CardModalHigher } from "./CardModel/CardModelHigher";
import LineChartWeek from "./Chart/ChartWeek";
import LineChartDay from "./Chart/ChartDay";
import LineChartMonth from "./Chart/ChartMonth";
import CardActive from "./Card/CardActive";
import CardWaiting from "./Card/CardWaiting";
import CardCancel from "./Card/CardCancel";
import CardUsed from "./Card/CardUsed";
import SvgNotification from "../../assets/iconComponent/notification";

export const Dashboard: FC = () => {
  const { Option } = Select;
  const [select, setSelect] = useState<any>(<LineChartDay />);
  const [selectValue, setSelectValue] = useState<string>("day");
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setSelectValue(e.value);
  };
  useEffect(() => {
    if (selectValue === "day") {
      setSelect(<LineChartDay />);
    } else if (selectValue === "week") {
      setSelect(<LineChartWeek />);
    } else if (selectValue === "month") {
      setSelect(<LineChartMonth />);
    }

    console.log(selectValue);
  }, [selectValue]);

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
      <div className="dashboard">
        <div className="dashboard_title">
          <h1> Dashboard </h1>{" "}
        </div>
        <div className="dashboard titleDash">
          {" "}
          <h1> Biểu đồ cấp số </h1>
        </div>
        <div className="dashboard dashL">
          <div className="dashboard dashL_top">
            <CardActive />
            <CardWaiting />
            <CardCancel />
            <CardUsed />
          </div>
          <div className="dashboard dashL_bottom">
            <div className="dashboard dashL_bottom_top">
              <div className="dashboard dashL_bottom_top--title">
                <span className="dashboard dashL_bottom_top--title-top">
                  Bảng thống kê hằng ngày
                </span>
                <span className="dashboard dashL_bottom_top--title-bottom">
                  Tháng 12/2021
                </span>
              </div>

              <div className="dashboard dashL_bottom_top--select">
                <span className="dashboard dashL_bottom_top--select-title">
                  {" "}
                  Xem theo
                </span>
                <Select
                  suffixIcon={<img src={require("../../assets/arrow.png")} />}
                  labelInValue
                  defaultValue={{ value: "day" }}
                  style={{ width: 120 }}
                  onChange={(e) => handleChange(e)}
                >
                  <Option value="day">Ngày</Option>
                  <Option value="week">Tuần</Option>
                  <Option value="month">Tháng</Option>
                </Select>
              </div>
            </div>
            {select}
          </div>
        </div>

        <div className="dashboard dashR">
          <span
            className="iconNotification"
            onClick={() => setOpen((open) => !open)}
          >
            <SvgNotification />
          </span>
          <div className={open ? "open" : "closed"}>
            <div className="open_title">
              {" "}
              <h1>Thông báo </h1>
            </div>

            {notify.map((item, index) => {
              return (
                <Col className="open_content" key={index} span={24}>
                  <p className="open_content--top">Người dùng:{item.name}</p>
                  <p className="open_content--bottom">
                    Thời gian nhận số: {item.time}
                  </p>
                </Col>
              );
            })}
          </div>
          <Link to="/account-user">
            <div className="dashboard dashR top">
              <AccountUserLeft />
            </div>
          </Link>
          <div className="dashboard dashR center">
            <div className="dashboard dashR title">
              <h1> Tổng quan</h1>{" "}
            </div>

            <div className="dashboard dashR chart">
              <CardModal
                percent={90}
                percentBigColor={"#FF7506"}
                percentSmallColor={"#7E7D88"}
                icon={"service"}
                count={4.221}
                title={"Thiết bị"}
                mainColor={"#FF7506"}
                iconColor={
                  "invert(49%) sepia(80%) saturate(1563%) hue-rotate(352deg) brightness(98%) contrast(110%)"
                }
                itemActiveCount={3.799}
                itemActiveTitle={"Đang hoạt động"}
                itemActiveColor={"#FFD130"}
                itemInactiveCount={422}
                itemInactiveTitle={"Ngưng hoạt động"}
                itemInactiveColor={"#7E7D88"}
              />

              <CardModal
                percent={76}
                percentBigColor={"#4277FF"}
                percentSmallColor={"#7E7D88"}
                icon={"service"}
                count={276}
                title={"Dịch vụ"}
                mainColor={"#4277FF"}
                iconColor={
                  "invert(48%) sepia(69%) saturate(4951%) hue-rotate(212deg) brightness(102%) contrast(102%)"
                }
                itemActiveCount={210}
                itemActiveTitle={"Đang hoạt động"}
                itemActiveColor={"#4277FF"}
                itemInactiveCount={66}
                itemInactiveTitle={"Ngưng hoạt động"}
                itemInactiveColor={"#7E7D88"}
              />

              <CardModalHigher
                percent={86}
                percentR={11.5}
                percentBigColor={"#35C75A"}
                percentSmallColor={"#7E7D88"}
                percentSmallestColor={"#F178B6"}
                icon={"service"}
                count={4.221}
                title={"Cấp số"}
                mainColor={"#35C75A"}
                iconColor={
                  " invert(53%) sepia(89%) saturate(370%) hue-rotate(83deg) brightness(101%) contrast(92%)"
                }
                itemUsedCount={3.621}
                itemUsedTitle={"Đã sử dụng"}
                itemUsedColor={"#35C75A"}
                itemWaitingCount={486}
                itemWaitingTitle={"Đang chờ"}
                itemWaitingColor={"#7E7D88"}
                itemCancelCount={32}
                itemCancelTitle={"Bỏ qua"}
                itemCancelColor={"#F178B6"}
              />
            </div>
          </div>

          <div className="dashboard dashR bottom">
            <Calendar className="calendar" />
          </div>
        </div>
      </div>
    </>
  );
};
