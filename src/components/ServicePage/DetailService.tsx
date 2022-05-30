import { Col, Input, Row, Select } from "antd";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { AiFillPlusSquare } from "react-icons/ai";
import { Option } from "antd/lib/mentions";
import DateRange from "./DateTimePicker";
import { TableServiceDetail } from "./TableServiceDetail";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SvgNotification from "../../assets/iconComponent/notification";

type Props = {};

export const DetailService: FC = (props: any) => {
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
            Dịch vụ <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-L">
            Danh sách dịch vụ
            <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-R"> Chi tiết</span>
          <span>
            <span
              className="iconNotificationD"
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
        <div className="facility_contentT">
          <h1> Quản lý dịch vụ</h1>
        </div>
        <div className="facility_serviceDetail">
          <div className="facility_serviceDetail_L">
            <Row className="facility_serviceDetail_L--row">
              <Col span={24}>
                <span className="facility_serviceDetail_L--title">
                  Thông tin dịch vụ
                </span>
              </Col>
              <Col span={24}>
                <p className="facility_serviceDetail_L--contentL">
                  {" "}
                  Mã dịch vụ
                </p>{" "}
                <span>201</span>
              </Col>
              <Col span={24}>
                <p className="facility_serviceDetail_L--contentL">
                  {" "}
                  Tên dịch vụ
                </p>{" "}
                <span>Khám tim mạch</span>
              </Col>
              <Col span={24}>
                <p className="facility_serviceDetail_L--contentL"> Mô tả</p>{" "}
                <span>Chuyên các bệnh về tim</span>
              </Col>
              <Col span={24}>
                <p className="facility_serviceDetail_L--title">
                  Quy tắc cấp số
                </p>
              </Col>
              <Col span={24} className="colCB-D">
                <p className="facility_serviceDetail_L--contentL">
                  Tăng tự động
                </p>
                <Input className="inputCB-D" />
                <span>đến</span>
                <Input className="inputCB-D" />
              </Col>
              <Col span={24} className="colCB-D">
                <p className="facility_serviceDetail_L--contentL"> Prefix</p>
                <Input className="inputCB-P" />
              </Col>
              <Col span={24}>
                <p className="facility_serviceDetail_L--contentL">
                  Reset mỗi ngày
                </p>
              </Col>
              <Col span={24}>
                <p className="facility_serviceDetail_L--contentL">
                  Ví dụ: 201-2001
                </p>
              </Col>
            </Row>
          </div>
          <div className="facility_serviceDetail_R">
            <div className="facility_serviceDetail_R_top--groupBtn">
              <div className="facility_serviceDetail_R_top--groupBtn-activeS">
                <div className="facility_serviceDetail_R_top--groupBtn-activeS_title">
                  Trạng thái
                </div>

                <Select
                  suffixIcon={<img src={require("../../assets/arrow.png")} />}
                  labelInValue
                  defaultValue={{ value: "all" }}
                  style={{ width: 400, height: 45 }}
                >
                  <Option value="all">Tất cả</Option>
                  <Option value="active">Hoạt động</Option>
                  <Option value="inactive">Ngưng hoạt động</Option>
                </Select>
              </div>

              <div className="facility_serviceDetail_R_top--groupBtn-time">
                <div className="facility_serviceDetail_R_top--groupBtn-time_title">
                  Chọn thời gian
                </div>
                {/* <DateRange onChange={}/> */}
              </div>

              <div className="facility_serviceDetail_R_top--groupBtn-search">
                <div className="facility_serviceDetail_R_top--groupBtn-search_title">
                  Từ khóa
                </div>
                <Input
                  style={{ width: 400, height: 45, marginLeft: "88%" }}
                  suffix={<img src={require("../../assets/search.png")} />}
                />
              </div>
            </div>
            <TableServiceDetail />
          </div>
        </div>
        <Link to="/updateService" className="facility_top--update">
          <div className="facility_iconEdit">
            <img src={require(`../../assets/edit.png`)} alt="" />
          </div>
          <a  href="/updateService">Cập nhật dịch vụ</a>
        </Link>
        <Link to="/service" className="facility_top--back">
          <div className="facility_iconBack">
            <img src={require(`../../assets/back.png`)} alt="" />
          </div>
          <a href="/service">Quay lại</a>
        </Link>
      </div>
    </>
  );
};
