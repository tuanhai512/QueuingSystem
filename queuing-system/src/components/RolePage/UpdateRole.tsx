import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SvgNotification from "../../assets/iconComponent/notification";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SideBar from "../SideBar/SideBar";
import firebase from "../../firebase/config";

type Props = {};

const roleCollection = firebase.firestore().collection("role");
export const UpdateRole: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<any>("");
  const [userUsed, setUserUsed] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
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

  useEffect(() => {
    setUserUsed(6);
   //setId( findID(id));
  }, []);

  function findID(id:any) {
    const Findid = roleCollection
      .where(firebase.firestore.FieldPath.documentId(), "==", id)
      .get();
    console.log(Findid);
  }
  function updateRole(newData: any, id: any) {
    roleCollection
      .doc(id)
      .update(newData)
      .catch((err: any) => {
        alert(err);
        console.log(err);
      });
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
            Quản lý vai trò
            <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-R"> Thêm mới vai trò</span>
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
          <h1> Danh sách vai trò</h1>
        </div>
        <div className="formAddRole">
          <Row>
            <Col span={24} className="formAddRole_title">
              <h1>Thông tin vai trò</h1>
            </Col>
            <Row className="formAddRole_content">
              <Col span={12} className="formAddRole_content-L">
                <Form>
                  <Form.Item>
                    <p className="formAddRole_content-L--title">
                      Tên vai trò<span className="note">*</span>
                    </p>
                    <Input
                      type="name"
                      placeholder="id"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <p className="formAddRole_content-L--title">Mô tả</p>
                    <Input.TextArea
                      placeholder="username"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <p className="formAddRole_content-L--titleNote">
                      {" "}
                      <span className="note"> *</span>Là thông tin bắt buộc
                    </p>
                  </Form.Item>
                </Form>
              </Col>

              <Col span={12} className="formAddRole_content-R">
                <h1 className="formAddRole_content-R--title">
                  Phân quyền chức năng
                </h1>
                <Col className="formAddRole_content-R--center">
                  <Form>
                    <Form.Item className="formAddRole_content-R--centerT">
                      <h1 className="formAddRole_content-R--center-titleT">
                        Nhóm chức năng A
                      </h1>
                      <Form.Item>
                        <Checkbox>
                          <span className="formAddRole_content-R--center-titleC">
                            Tất cả
                          </span>
                        </Checkbox>
                      </Form.Item>
                      <Form.Item>
                        <Checkbox>
                          <span className="formAddRole_content-R--center-titleC">
                            Chức năng x
                          </span>
                        </Checkbox>
                      </Form.Item>
                      <Form.Item>
                        <Checkbox>
                          <span className="formAddRole_content-R--center-titleC">
                            Chức năng y
                          </span>
                        </Checkbox>
                      </Form.Item>
                      <Form.Item>
                        <Checkbox>
                          <span className="formAddRole_content-R--center-titleC">
                            Chức năng z
                          </span>
                        </Checkbox>
                      </Form.Item>
                    </Form.Item>
                    <Form.Item className="formAddRole_content-R--centerT">
                      <h1 className="formAddRole_content-R--center-titleT">
                        Nhóm chức năng B
                      </h1>
                      <Form.Item>
                        <Form.Item>
                          <Checkbox>
                            <span className="formAddRole_content-R--center-titleC">
                              Tất cả
                            </span>
                          </Checkbox>
                        </Form.Item>
                        <Checkbox>
                          <span className="formAddRole_content-R--center-titleC">
                            Chức năng x
                          </span>
                        </Checkbox>
                      </Form.Item>
                      <Form.Item>
                        <Checkbox>
                          <span className="formAddRole_content-R--center-titleC">
                            Chức năng x
                          </span>
                        </Checkbox>
                      </Form.Item>
                      <Form.Item>
                        <Checkbox>
                          <span className="formAddRole_content-R--center-titleC">
                            Chức năng x
                          </span>
                        </Checkbox>
                      </Form.Item>
                    </Form.Item>
                  </Form>
                </Col>
              </Col>
            </Row>
          </Row>
        </div>
        <div className="btnGroupS">
          <div className="btnGroupS-btnCancel">
            <Button className="btnGroupS-btnCancel--cancel">Hủy bỏ</Button>
          </div>
          <div className="btnGroupS-btnCreate">
            <Button
              className="btnGroupS-btnCreate--create"
              onClick={() =>
                updateRole(id, {
                  name: name,
                  description: description,
                  userUsed: userUsed,
                })
              }
            >
              Cập nhật{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
