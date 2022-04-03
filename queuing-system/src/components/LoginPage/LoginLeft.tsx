import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox,Space} from "antd";
import logoAlta from "../../assets/Logoalta.png";
import styles from "./login.scss";
import db from '../../firebase/config'
import { Link } from 'react-router-dom';

function LoginLeft () {

  return (
    <div className="loginLeft">
      <div className="logoAlta">
        <img src={logoAlta} />
      </div>
      <Form className="formLogin">
        <Form.Item
        name="name"
        rules={[
         {
           required: true,
           message: 'Vui long nhap tai khoan'
         }
        ]}>
          <p>Tên đăng nhập *</p>
          <Input type="text" placeholder="Tên đăng nhập" />
        </Form.Item>

        <Form.Item
         name="password"
         rules={[
          {
            required: true,
            message: 'Vui long nhap mat khau'
          }
         ]}>
          <p>Mật khẩu *</p>
        
          <Input.Password placeholder="Mật khẩu" />
   
          
        </Form.Item>
        <span><Link to="/forgot-password">Quên mật khẩu?</Link></span>
        <div className="btnLogin">
          <Button><a>Đăng nhập</a></Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginLeft;
