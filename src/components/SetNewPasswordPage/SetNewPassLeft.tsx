import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import logoAlta from "../../assets/Logoalta.png";
import styles from "./newpassword.scss";
import db from "../../firebase/config";

function SetNewPassLeft() {
  return (
    <div className="newPassLeft">
      <div className="logoAlta">
        <img src={logoAlta} />
      </div>
      <Form className="formNewPassword">
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Vui long nhap mat khau",
            },
          ]}
        >
          <h1>Đặt lại mật khẩu mới</h1>
          <p>Mật khẩu </p>
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Vui long nhap mat khau",
            },
          ]}
        >
          <p>Nhập lại mật khẩu </p>
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>
        <div className="btnNewPassConfirm">
          <Button className="btnConfirm">
            <a>Xác nhận</a>
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default SetNewPassLeft;
