import React, { FC, useEffect, useState } from "react";
import { devicesCollection } from "./TableFacillity";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { Col, Form, Row } from "antd";
import { AiFillPlusSquare } from "react-icons/ai";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SvgNotification from "../../assets/iconComponent/notification";

type Props = {};

export const DetailFacility: FC = (props: Props) => {
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
            Danh sách thiết bị
            <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-R"> Chi tiết thiết bị</span>
          <span>
            <span
              className="iconNotificationC"
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
          <h1> Quản lý thiết bị</h1>
        </div>
        <div className="formDetail">
          <Row>
            <Col span={24} className="title">
              {" "}
              <h1>Thông tin thiết bị</h1>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form>
                <Form.Item>
                  <p className="formDetail_title">Mã thiết bị</p>
                  <p className="formDetail_content">K0_01</p>
                </Form.Item>
                <Form.Item>
                  <p className="formDetail_title">Tên thiết bị</p>
                  <p className="formDetail_content">Kiosk</p>
                </Form.Item>
                <Form.Item>
                  <p className="formDetail_title">Địa chỉ IP</p>
                  <p className="formDetail_content">128.172.308</p>
                </Form.Item>
              </Form>
            </Col>
            <Col span={12}>
              <Form.Item>
                <p className="formDetail_title">Loại thiết bị</p>
                <p className="formDetail_content">Kiosk</p>
              </Form.Item>
              <Form.Item>
                <p className="formDetail_title">Tên đăng nhập</p>
                <p className="formDetail_content">Linhkyo011</p>
              </Form.Item>
              <Form.Item>
                <p className="formDetail_title">Mật khẩu</p>
                <p className="formDetail_content">CMS</p>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              {" "}
              <Form.Item>
                <p className="formDetail_titleS">Dịch vụ sử dụng </p>{" "}
              </Form.Item>{" "}
            </Col>
            <Col span={24}>
              {" "}
              <Form.Item>
                <p className="formDetail_contentS">Khám tim mạch </p>{" "}
              </Form.Item>{" "}
            </Col>
          </Row>
        </div>
        <Link to="/updateFacility" className="facility_top--addBtn">
          <AiFillPlusSquare />
          <a href="/updateFacility">Cập nhật thiết bị</a>
        </Link>
      </div>
    </>
  );
};
