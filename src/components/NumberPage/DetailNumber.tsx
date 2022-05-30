import { Col, Form, Row } from "antd";
import React, { FC, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import SvgNotification from "../../assets/iconComponent/notification";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SideBar from "../SideBar/SideBar";

type Props = {};

export const DetailNumber: FC = ({}: Props) => {
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
            Thiết bị <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-L">
            Danh sách cấp số
            <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-R"> Chi tiết </span>
          <span>
            <span
              className="iconNotificationN"
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
          <h1> Quản lý cấp số</h1>
        </div>
        <div className="formDetail">
          <Row>
            <Col span={24} className="title">
              {" "}
              <h1>Thông tin cấp số</h1>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form>
                <Form.Item>
                  <p className="formDetail_title">Họ tên:</p>
                  <p className="formDetail_content">Nguyễn Thị Dung</p>
                </Form.Item>
                <Form.Item>
                  <p className="formDetail_title">Tên dịch vụ:</p>
                  <p className="formDetail_content">Khám tim mạch</p>
                </Form.Item>
                <Form.Item>
                  <p className="formDetail_title">Số thứ tự:</p>
                  <p className="formDetail_content">2001201</p>
                </Form.Item>
                <Form.Item>
                  <p className="formDetail_title">Thời gian cấp:</p>
                  <p className="formDetail_content">14:35 - 07/11/2021</p>
                </Form.Item>
                <Form.Item>
                  <p className="formDetail_title">Hạn sử dụng:</p>
                  <p className="formDetail_content">18:00 - 07/11/2021</p>
                </Form.Item>
              </Form>
            </Col>
            <Col span={12}>
              <Form.Item>
                <p className="formDetail_title">Nguồn cấp:</p>
                <p className="formDetail_content">Kiosk</p>
              </Form.Item>
              <Form.Item>
                <p className="formDetail_title">Tên đăng nhập</p>
                <p className="formDetail_content">Linhkyo011</p>
              </Form.Item>
              <Form.Item>
                <p className="formDetail_title">Trạng thái:</p>
                <p className="formDetail_content">
                  {" "}
                  <BsDot /> Đang chờ
                </p>
              </Form.Item>
              <Form.Item>
                <p className="formDetail_title">Số điện thoại:</p>
                <p className="formDetail_content">0948523623</p>
              </Form.Item>
              <Form.Item>
                <p className="formDetail_title">Địa chỉ Email:</p>
                <p className="formDetail_content">nguyendung@gmail.com</p>
              </Form.Item>
            </Col>
          </Row>
        </div>
        <Link to="/addNumber" className="facility_top--addBtn">
          <AiFillPlusSquare />
          <a href="/addNumber">Quay lại</a>
        </Link>
      </div>
    </>
  );
};
