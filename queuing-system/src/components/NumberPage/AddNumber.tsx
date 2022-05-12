import { Button, Col, Row, Select } from "antd";
import { Option } from "antd/lib/mentions";
import Modal from "antd/lib/modal/Modal";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import SvgNotification from "../../assets/iconComponent/notification";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SideBar from "./../SideBar/SideBar";
import "./number.scss";
type Props = {};

export const AddNumber: FC = (props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
            Cấp số <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-L">
            Danh sách cấp số
            <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-R"> Cấp số</span>
          <span>
            <span
              className="iconNotificationT"
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
        <div className="formAddNumber">
          <h2 className="formAddNumber_title"> Cấp số mới </h2>
          <Row className="formAddNumber_content">
            <Col span={24} className="formAddNumber_content_titleContent">
              <h1> Dịch vụ khách hàng lựa chọn</h1>
            </Col>
            <Col span={24} className="formAddNumber_content_Content">
              <Select
                suffixIcon={<img src={require("../../assets/arrow.png")} />}
                labelInValue
                placeholder="Chọn dịch vụ"
                style={{ width: 200, height: 45, marginLeft: "20px" }}
              >
                <Option value="all">Tất cả</Option>
                <Option value="wait">Đang chờ</Option>
                <Option value="used">Đã sử dụng</Option>
                <Option value="cancel">Bỏ qua</Option>
              </Select>
            </Col>
          </Row>
          <div className="btnGroupN">
            <div className="btnGroupN-btnCancel">
              <Button className="btnGroupN-btnCancel--cancel">Hủy bỏ</Button>
            </div>
            <div className="btnGroupN-btnCreate">
              <Button
                onClick={showModal}
                className="btnGroupN-btnCreate--create"
              >
                In số
              </Button>

              <Modal
                className="modal"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
              >
                <div className="modal_top">
                  <Row>
                    <Col span={24} className="modal_top_title">
                      <h1> Số thứ tự được cấp</h1>
                    </Col>
                    <Col span={24} className="modal_top_number">
                      <h1>2001201</h1>
                    </Col>
                    <Col span={24} className="modal_top_service">
                      <h1>
                        DV: Khám răng hàm mặt <span> (tại quầy số 1)</span>{" "}
                      </h1>
                    </Col>
                  </Row>
                </div>

                <div className="modal_bottom">
                  <Row className="modal_bottom_row">
                    <Col>
                      <h1 className="modal_bottom_row_title">
                        Thời gian cấp:{" "}
                        <span className="modal_bottom_row_time">
                          {" "}
                          09:30 11/10/2021
                        </span>{" "}
                      </h1>
                    </Col>
                    <Col>
                      <h1 className="modal_bottom_row_title">
                        Hạn sử dụng:{" "}
                        <span className="modal_bottom_row_time">
                          {" "}
                          17:30 11/10/2021{" "}
                        </span>{" "}
                      </h1>
                    </Col>
                  </Row>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
