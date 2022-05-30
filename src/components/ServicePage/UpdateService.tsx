import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SvgNotification from "../../assets/iconComponent/notification";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SideBar from "../SideBar/SideBar";
import firebase from "./../../firebase/config";
type Props = {};

const serviceCollection = firebase.firestore().collection("service");
export const UpdateService: FC = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [des, setDes] = useState<string>("");
  const [active, setActive] = useState<string>("");
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
  function updateService(newData: any) {
    serviceCollection
      .doc(id)
      .update(newData)
      .catch((err: any) => {
        alert(err);
        console.log(err);
      });
  }

  useEffect(() => {
    setActive("Hoạt động");
  }, []);
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
          <span className="facility_title-L">
            {" "}
            Chi tiết <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-R"> Cập nhật</span>
          <span>
            <span
              className="iconNotificationU"
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
        <div className="formAdd">
          <Row>
            <Col span={24} className="title">
              <h1>Thông tin dịch vụ</h1>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form>
                <Form.Item>
                  <p>
                    Mã dịch vụ<span>*</span>
                  </p>
                  <Input
                    type="id"
                    placeholder="id"
                    onChange={(e) => setId(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <p>
                    Tên dịch vụ<span>*</span>
                  </p>
                  <Input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
              </Form>
            </Col>
            <Col span={12}>
              <Form>
                <Form.Item>
                  <p>Mô tả</p>
                  <Input.TextArea
                    placeholder="username"
                    onChange={(e) => setDes(e.target.value)}
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="title">
              <h1>Quy tắc cấp số</h1>
            </Col>

            <Col className="colCB">
              <Checkbox>
                <span className="contentDB"> Tăng tự động từ </span>{" "}
              </Checkbox>
              <Input className="inputCB" />
              <span className="contentDB">đến</span>
              <Input className="inputCB" />
            </Col>
          </Row>
          <Row>
            <Col className="colCB">
              <Checkbox>
                <span className="contentDB"> Prefix </span>{" "}
              </Checkbox>
              <Input className="inputCB" />
            </Col>
          </Row>
          <Row>
            <Col className="colCB">
              <Checkbox>
                <span className="contentDB"> Surfix</span>{" "}
              </Checkbox>
              <Input className="inputCB" />
            </Col>
          </Row>
          <Row>
            <Col className="colCB">
              <Checkbox>
                <span className="contentDB"> Reset mỗi ngày </span>{" "}
              </Checkbox>
            </Col>
          </Row>
          <p className="note">
            <span>*</span>Là thông tin bắt buộc
          </p>
        </div>
        <div className="formAdd_btnGroup"></div>

        <div className="formAdd_btnGroup-btnCancel">
          <Button className="formAdd_btnGroup-btnCancel--cancel">Hủy bỏ</Button>
        </div>
        <div className="formAdd_btnGroup-btnCreate">
          <Button
            className="formAdd_btnGroup-btnCreate--create"
            onClick={() => {
              updateService({
                name: name,
                id: id,
                des: des,
                active: active,
              });
              alert("Cập nhật thành công");
            }}
          >
            Cập nhật
          </Button>
        </div>
      </div>
    </>
  );
};
