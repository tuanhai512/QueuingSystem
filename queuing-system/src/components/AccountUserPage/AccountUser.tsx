import React, { FC } from "react";
import SvgNotification from "../../assets/iconComponent/notification";
import SideBar from "../SideBar/SideBar";
import "./AccountUser.scss";
import ava from "../../assets/avatar2.png";

import AccountUserLeft from "./AccountUserLeft";
import { Col, Form, Input, Row } from "antd";

type Props = {};

const AccountUser: FC = ({}: Props) => {
  return (
    <div className="user">
      <SideBar />
      <div className="user content">
        <div className="user content top">
          <div className="user content top topL">
            <h2>Thông tin cá nhân </h2>
          </div>
          <AccountUserLeft />
        </div>
        <div className="user info">
          <div className="user info content">
            <img width={350} height={350} src={ava} alt="" />
            <h2> Lê Quỳnh Ái Vân</h2>
            <div className="user info content form">
              <Row>
                <Col span={12}>
                  <Form>
                    <Form.Item>
                        <p>Tên người dùng</p>
                      <Input disabled={true} value={"Lê Quỳnh Ái Vân"}/>
                    </Form.Item>
                    <Form.Item>
                        <p>Số điện thoại</p>
                      <Input disabled={true} value={"0767375921"}/>
                    </Form.Item>
                    <Form.Item>
                    <p>Email</p>
                      <Input disabled={true} value={"adminSSO1@domain.com"}/>
                    </Form.Item>
                  </Form>
                </Col>
                <Col span={12}>
                  <Form>
                    <Form.Item>
                        <p>Tên đăng nhập</p>
                      <Input disabled={true} value={"lequynhaivan01"}/>
                    </Form.Item>
                    <Form.Item>
                    <p>Mật khẩu</p>
                      <Input disabled={true} value={"311940211"}/>
                    </Form.Item>
                    <Form.Item>
                    <p>Vai trò</p>
                      <Input disabled={true} value={"Kế toán"}/>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountUser;
