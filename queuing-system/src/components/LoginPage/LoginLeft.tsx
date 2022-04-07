import React, { FC, useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Space } from "antd";
import logoAlta from "../../assets/Logoalta.png";
import styles from "./login.scss";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/config";
import { RiErrorWarningLine } from "react-icons/ri";

export const LoginLeft: FC = () => {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [valid, setValide] = useState<boolean>(false);

  const history = useHistory();
  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");
    setAuthenticating(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        setValide(false);
        history.push("/Dashboard");
      })
      .catch((error) => {
        console.log(error);
        setValide(true);
        setAuthenticating(false);
        setError("Email or password is incorrect");
      });
  };

  return (
    <div className="loginLeft">
      <div className="logoAlta">
        <img src={logoAlta} />
      </div>
      <Form className="formLogin">
        <Form.Item
          rules={[
            {
              required: true,
              message: "Vui long nhap tai khoan",
            },
          ]}
        >
          <p>Tên đăng nhập *</p>
          <Input
            className={!valid ? "ant-input" : "ant-input-password error"}
            type="text"
            placeholder="Tên đăng nhập"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Vui long nhap mat khau",
            },
          ]}
        >
          <p>Mật khẩu *</p>

          <Input.Password
            className={
              !valid ? "ant-input-password" : "ant-input-password error"
            }
            placeholder="Mật khẩu"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </Form.Item>
        {valid ? (
          <div className="errorLogin">
            <div className="errorLogin message">
              <span>
              <RiErrorWarningLine />
              </span>
              <h2>Sai mật khẩu hoặc tên đăng nhập</h2>
            </div>

            <div className="errorLogin btnLogin">
              <Button
                disabled={authenticating}
                block
                onClick={() => signInWithEmailAndPassword()}
              >
                <a>Đăng nhập</a>
              </Button>
            </div>
            <span>
              <Link to="/forgot-password">Quên mật khẩu?</Link>
            </span>
          </div>
        ) : (
          <>
            <span>
              <Link to="/forgot-password">Quên mật khẩu?</Link>
            </span>
            <div className="btnLogin error">
              <Button
                disabled={authenticating}
                block
                onClick={() => signInWithEmailAndPassword()}
              >
                <a>Đăng nhập</a>
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};

export default LoginLeft;
