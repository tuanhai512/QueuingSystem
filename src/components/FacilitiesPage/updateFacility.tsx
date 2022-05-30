import React, { FC, useEffect, useState } from "react";
import SideBar from "./../SideBar/SideBar";
import { Button, Col, Form, Input, Select } from "antd";
import { Row } from "antd";
import { Option } from "antd/lib/mentions";
import { devicesCollection } from "./TableFacillity";
import SvgNotification from "../../assets/iconComponent/notification";
import { Link } from "react-router-dom";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";

type Props = {};

export const UpdateFacility: FC = ({}: Props) => {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [service, setService] = useState<any>();
  const [connect, setConnect] = useState<string>("");
  const [active, setActive] = useState<string>("");

  const children: [] = [];
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
  const options = [
    { value: "Khám tim mạch" },
    { value: "Khám sản phụ khoa" },
    { value: "Khám tai mũi họng" },
    { value: "Khám hô hấp" },
  ];

  function updateFacility(newData: any) {
    devicesCollection
      .doc(id)
      .set(newData)
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }
  const handleChange = (e: any) => {
    setType(e.value);
  };
  // const handleChangeService = (e: any) => {
  //   setService([
  //     "Khám tim mạch",
  //     "Khám sản phụ khoa",
  //     "Khám tai mũi họng",
  //     "Khám hô hấp",
  //   ]);
  // };
  useEffect(() => {
    setActive("Hoạt động");
    setConnect("Kết nối");
    setService([
      "Khám tim mạch",
      "Khám sản phụ khoa",
      "Khám tai mũi họng",
      "Khám hô hấp",
    ]);
  }, []);

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
          <span className="facility_title-R"> Cập nhật thiết bị</span>
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
        <div className="formAdd">
          <Row>
            <Col span={24} className="title">
              <h1>Thông tin thiết bị</h1>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form>
                <Form.Item>
                  <p>
                    Mã thiết bị<span>*</span>
                  </p>
                  <Input
                    type="id"
                    placeholder="id"
                    onChange={(e) => setId(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <p>
                    Tên thiết bị<span>*</span>
                  </p>
                  <Input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <p>
                    Địa chỉ IP <span>*</span>
                  </p>
                  <Input
                    type="text"
                    placeholder="address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Item>
              </Form>
            </Col>
            <Col span={12}>
              <Form>
                <Form.Item>
                  <p>
                    Loại<span>*</span>
                  </p>
                  <Select
                    suffixIcon={<img src={require("../../assets/arrow.png")} />}
                    labelInValue
                    placeholder="Chọn loại thiết bị"
                    style={{ width: "520px", borderRadius: "15px" }}
                    onChange={(e) => handleChange(e)}
                  >
                    <Option value="1">Kiosk</Option>
                    <Option value="2">Kiosk2</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <p>
                    Tên đăng nhập<span>*</span>
                  </p>
                  <Input
                    type="text"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <p>
                    Mật khẩu<span>*</span>
                  </p>
                  <Input
                    type="text"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item>
                <p>
                  Dịch vụ sử dụng<span>*</span>
                </p>
                <Select
                  className="selectService"
                  mode="multiple"
                  placeholder="service"
                  defaultValue={options}
                  // onChange={(e) => handleChangeService(e)}
                  options={options}
                />
              </Form.Item>
            </Col>
          </Row>
          <p className="note">
            <span>*</span>Là thông tin bắt buộc
          </p>
        </div>
        <div className="formAdd_btnGroup"></div>

        <div className="formAdd_btnGroup-btnCancel">
          <Button className="formAdd_btnGroup-btnCancel--cancel">
            {" "}
            Hủy bỏ
          </Button>
        </div>
        <div className="formAdd_btnGroup-btnCreate">
          <Button
            className="formAdd_btnGroup-btnCreate--create"
            onClick={() => {
              updateFacility({
                name: name,
                id: id,
                type: type,
                address: address,
                password: password,
                username: username,
                service: service,
                connect: connect,
                active: active,
              });
              alert("Cập nhật thành công");
            }}
          >
            Cập nhật thiết bị
          </Button>
        </div>
      </div>
    </>
  );
};
