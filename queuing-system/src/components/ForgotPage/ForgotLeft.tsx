import React, { FC, useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import logoAlta from "../../assets/Logoalta.png";
import styles from "./forgot.scss";
import db from '../../firebase/config'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";


const ForgotLeft : FC =() => {

  return (
    <div className="forgotLeft">
      <div className="logoAlta">
        <img src={logoAlta} />
      </div>
      <Form className="formForgot">
        <Form.Item
        name="name"
        rules={[
         {
           required: true,
           message: 'Vui lòng nhập mật khẩu'
         }
        ]}>
          <h1>Đặt lại mật khẩu</h1>
          <p>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
          <Input type="text" placeholder="Tên đăng nhập" />
        </Form.Item>
        <div className="btnGroup">
        <div className="btnForgotCancel">
          <Button className="btnCancel"><a>Hủy</a></Button>
        </div>
        <div className="btnForgotConfirm">
          <Button className="btnConfirm">
            <Link to="/new-password">
            Tiếp tục
            </Link>
            </Button>
        </div>
        </div>
       

      </Form>
    </div>
  );
};

export default ForgotLeft;
