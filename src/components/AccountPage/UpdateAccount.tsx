import { Button, Col, Form, Input, Row, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import React, { FC, useState } from 'react'
import { AiFillPlusSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SvgNotification from '../../assets/iconComponent/notification'
import AccountUserLeft from '../AccountUserPage/AccountUserLeft'
import SideBar from '../SideBar/SideBar'
import firebase from "../../firebase/config";

type Props = {}

const accountCollection = firebase.firestore().collection("account");
export const UpdateAccount:FC = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
  function updateAccount(newData: any) {
    accountCollection
      .doc(newData.id)
      .set(newData)
      .catch((err:any) => {
        alert(err);
        console.log(err);
      });
  }
  function handleRole(value: any) {
    if (value === 1) {
      setRole("Kế toán");
    }
    if (value === 2) {
      setRole("Quản lý");
    } else {
      setRole("Admin");
    }
    console.log(value);
  }
  function handleStatus(value: any) {
    if (value === "all") {
      setStatus("Tất cả");
    }
    if (value === "active") {
      setStatus("Hoạt động");
    } else {
      setStatus("Ngưng hoạt động");
    }
    // setStatus(e.value);
    console.log(value);
  }
  return (
    <>
       <SideBar />
      <div className="facility">
        <div className="facility_title">
          <span className="facility_title-L">
            Cài đặt hệ thống{" "}
            <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-L">
            Quản lý tài khoản
            <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-R"> Cập nhật tài khoản</span>
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
                    <p className="openN_contentN--topN">Người dùng:{item.name}</p>
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
          <h1> Quản lý tài khoản</h1>
        </div>
        <div className="formAdd">
          <Row>
            <Col span={24} className="title">
              <h1>Thông tin tài khoản</h1>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form>
                <Form.Item>
                  <p>
                    Họ và tên<span>*</span>
                  </p>
                  <Input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                  <p>
                    Số điện thoại<span>*</span>
                  </p>
                  <Input type="number" placeholder="phone" onChange={(e) => setPhone(e.target.value)} />
                </Form.Item>
                <Form.Item>
                  <p>
                    Email<span>*</span>
                  </p>
                  <Input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                  <p>
                    Vai trò <span>*</span>
                  </p>
                  <Select
                    placeholder="Chọn vai trò"
                    style={{ width: 550, height: 50 }}
                    onChange={(e) => handleRole(e)}
                  >
                    <Option value="1">Kế toán</Option>
                    <Option value="2">Quản lý</Option>
                    <Option value="3">Admin</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
            <Col span={12}>
              <Form>
                <Form.Item>
                  <p>
                    Tên đăng nhập<span>*</span>{" "}
                  </p>
                  <Input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                  <p>
                    Mật khẩu<span>*</span>{" "}
                  </p>
                  <Input.Password placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                  <p>
                    Nhập lại mật khẩu<span>*</span>{" "}
                  </p>
                  <Input.Password placeholder="confirm" />
                </Form.Item>
                <Form.Item>
                  <p>Tình trạng </p>
                  <Select
                    defaultValue={{ value: "1" }}
                    style={{ width: 550, height: 50 }}
                    onChange={(e) => handleStatus(e)}
                  >
                    <Option value="1">Tất cả</Option>
                    <Option value="2">Ngưng hoạt động</Option>
                    <Option value="3">Hoạt động</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <p className="note">
            <span>*</span>Là thông tin bắt buộc
          </p>
        </div>
        <div className="btnGroupA">
          <div className="btnGroupA-btnCancel">
            <Button className="btnGroupA-btnCancel--cancel">Hủy bỏ</Button>
          </div>
          <div className="btnGroupA-btnCreate">
            <Button className="btnGroupA-btnCreate--create"  onClick={() => {
                updateAccount({
                  username: username,
                  name: name,
                  phone: phone,
                  role: role,
                  status: status,
                  email:email ,
                  // password,
                });
                alert("Cập nhật thành công");
              }}>
              Cập nhật
            </Button>
          </div>
        </div>
      </div></>
  )
}

